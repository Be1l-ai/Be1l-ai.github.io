import random

def slot():
    # Define symbols with their probabilities
    symbols = ["King", "Queen", "Ace", "Joker"]
    probabilities = [0.05, 0.15, 0.4, 0.4]  # Adjust probabilities (must sum to 1)

    # Generate three slots using weighted probabilities
    slots = random.choices(symbols, weights=probabilities, k=3)

    # Print the result
    print(" | ".join(slots))

    # Check for jackpot or other matches
    if slots.count(slots[0]) == 3:  # All three are the same
        if slots[0] == "King":
            print("🎉 Congrats! Jackpot!!! 🎰")
        elif slots[0] == "Queen":
            print("💎 Amazing!!!")
        else:
            print("Nice win!")
    else:
        print("Try again...")

# Run the slot machine
slot()
