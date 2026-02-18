mport json
import os
import glob

PROJECT_ROOT = r"C:\Users\perod\WebstormProjects\Cobblemon-RLM"
SPECIES_DIR = os.path.join(PROJECT_ROOT, "data", "cobblemon", "species_additions")
DEX_ENTRY_DIR = os.path.join(PROJECT_ROOT, "data", "cobblemon", "dex_entry_additions")
LANG_DIR = os.path.join(PROJECT_ROOT, "assets", "cobblemon", "lang")
LANG_FILES = ["en_us.json", "fr_fr.json"]

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def process_species():
    ensure_dir(DEX_ENTRY_DIR)
    
    updates = {} # Store lang updates

    for filepath in glob.glob(os.path.join(SPECIES_DIR, "*.json")):
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError:
                print(f"Error decoding {filepath}")
                continue

        target = data.get("target", "")
        if not target.startswith("cobblemon:"):
            continue
        
        species_name = target.split(":")[1]
        modified_file = False
        
        # Check if the whole file is marked as RLM feature
        is_rlm_file = "rlm" in data.get("features", [])

        if "forms" in data:
            for form in data["forms"]:
                form_name = form.get("name")
                aspects = form.get("aspects", [])
                
                # Determine if this form is an RLM form we want to add
                is_rlm_form = (
                    form_name == "rlm" or 
                    "rlm" in aspects or 
                    is_rlm_file
                )

                if is_rlm_form:
                    # 1. Add pokedex entry to species JSON
                    desc_key = f"cobblemon.species.{species_name}-{form_name}.desc"
                    if "pokedex" not in form:
                        form["pokedex"] = []
                    
                    if desc_key not in form["pokedex"]:
                        form["pokedex"] = [desc_key] # Overwrite or append? User sample shows single item list.
                        modified_file = True

                    # 2. Create Dex Entry Addition
                    dex_entry_filename = f"{species_name}_{form_name}.json"
                    dex_entry_path = os.path.join(DEX_ENTRY_DIR, dex_entry_filename)
                    
                    # Only create if it implies it's a new addition or we need to ensure it exists
                    # User asked to "add each RLM form... via this datapack"
                    dex_entry_data = {
                        "entryId": target,
                        "forms": [
                            {
                                "displayForm": form_name,
                                "unlockForms": [form_name]
                            }
                        ]
                    }
                    
                    with open(dex_entry_path, 'w', encoding='utf-8') as def_file:
                        json.dump(dex_entry_data, def_file, indent=2)

                    # 3. Prepare Lang Updates
                    form_translation_key = f"cobblemon.ui.pokedex.info.form.{species_name}-{form_name}"
                    
                    display_name = "RLM" if form_name == "rlm" else form_name.capitalize()
                    
                    updates[form_translation_key] = display_name
                    updates[desc_key] = f"This {species_name} is dead."

        if modified_file:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
                
    return updates

def update_lang_files(new_entries):
    for lang_file in LANG_FILES:
        path = os.path.join(LANG_DIR, lang_file)
        if not os.path.exists(path):
            print(f"Warning: Lang file {path} not found")
            continue
            
        with open(path, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError:
                print(f"Error decoding {path}")
                continue
        
        # Merge updates
        for key, value in new_entries.items():
            data[key] = value
            
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    lang_updates = process_species()
    update_lang_files(lang_updates)
    print("Done processing RLM forms.")
