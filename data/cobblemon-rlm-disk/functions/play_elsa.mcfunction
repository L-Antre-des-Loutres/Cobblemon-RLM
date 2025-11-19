# Fait jouer la musique quand le disque personnalisé est dans le jukebox
execute as @a at @s if block ~ ~ ~ jukebox{RecordItem:{tag:{CustomModelData:101}}} run playsound mydiscs:music.elsa_mina_battle record @a ~ ~ ~
