# Skript Nexus
🧪 Various useful tools to develop with Skript.

### 1. GUI converter
The first project is to turn a GUI TuSKe into a GUI skript-gui easily at the touch of a button.
Here is an example of the rendering:

**TuSKe**
```applescript
command gui:
    trigger:
        set {_pl} to player
        open virtual chest inventory to {_pl}
        format gui slot 0 of {_pl} with stone named "Wawow"
        format gui slot 1 of {_pl} with stone named "Wiwoaow" to close
        format gui slot 3 of {_pl} with stone named "Wowawi" to run {_pl} command "/gui"
        format gui slot 5 of {_pl} with stone named "Wiwowa" to run console command "/gui"
        format gui slot 6 of {_pl} with stone named "Wowiwwwow" to run function doSomething()
        format gui slot 7 of {_pl} with stone named "Wiwawooow" to close then run function doSomething()
```

**skript-gui**
```applescript
command gui:
    trigger:
        set {_pl} to player
        create a new gui with virtual chest inventory:
            make gui slot 0 with stone named "Wawow"
            make gui slot 1 with stone named "Wiwoaow":
                close {_pl}'s inventory
            make gui slot 3 with stone named "Wowawi":
                make {_pl} execute command "/gui"
            make gui slot 5 with stone named "Wiwowa":
                make console execute command "/gui"
            make gui slot 6 with stone named "Wowiwwwow":
                 doSomething()
            make gui slot 7 with stone named "Wiwawooow":
                close {_pl}'s inventory
                doSomething()
        open last created gui to {_pl}
```
