import random

def slot():
    symbols = ["King", "Queen", "Ace", "Joker"]
    Slot = random.choice(symbols)
    Slot2 = random.choice(symbols)
    Slot3 = random.choice(symbols)

    result = print(Slot, Slot2, Slot3)
    if Slot == "King" and Slot2 == "King" and Slot3 == "King":
        a = print("Congrats! Jackpot!!!")
    elif Slot == "Queen" and Slot2 == "Queen" and Slot3 == "Queen":
        print("Amazing!!!")
    else:
        print("Try again...")
slot()
