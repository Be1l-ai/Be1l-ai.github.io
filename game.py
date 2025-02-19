import random

def deposit(user, accounts, filename="account.txt"):
    """Deposit money into the user's account."""
    amount = float(input("Enter amount to deposit: $"))
    if amount > 0:
        accounts[user] += amount
        print(f"✅ ${amount:.2f} deposited. New balance: ${accounts[user]:.2f}")
        save_accounts(accounts, filename)
    else:
        print("❌ Deposit amount must be positive.")

def withdraw(user, accounts, filename="account.txt"):
    """Withdraw money from the user's account."""
    amount = float(input("Enter amount to withdraw: $"))
    if 0 < amount <= accounts[user]:  
        accounts[user] -= amount
        print(f"✅ ${amount:.2f} withdrawn. New balance: ${accounts[user]:.2f}")
        save_accounts(accounts, filename)
    elif amount <= 0:
        print("❌ Withdrawal amount must be positive.")
    else:
        print("❌ Insufficient funds!")

def save_accounts(accounts, filename="account.txt"):
    """Save accounts back to the file."""
    with open(filename, "w") as file:
        for name, balance in accounts.items():
            file.write(f"{name}:{balance}\n")

def load_accounts(filename="account.txt"):
    """Load accounts from a file and return as a dictionary."""
    accounts = {}
    try:
        with open(filename, "r") as file:
            for line in file:
                name, balance = line.strip().split(":")
                accounts[name] = float(balance)
    except FileNotFoundError:
        pass  # If no file exists, return empty accounts
    return accounts

def account():
    """Handles account login and transactions."""
    filename = "account.txt"
    accounts = load_accounts(filename)

    user = input("Please enter your username: ")

    if user in accounts:
        print(f"Logging in...\nWelcome back, {user}! Your balance is ${accounts[user]:.2f}")
    else:
        accounts[user] = 0  # New user, set balance to 0
        print(f"Creating new account for {user}, balance: $0.00")

    while True:
        action = input("[Deposit] or [Withdraw] or [Exit]: ").strip().lower()
        if action == "deposit":
            deposit(user, accounts, filename)
        elif action == "withdraw":
            withdraw(user, accounts, filename)
        elif action == "exit":
            print("✅ Changes saved. Goodbye!")
            break
        else:
            print("❌ Invalid choice. Please select 'Deposit', 'Withdraw', or 'Exit'.")

def main():
    """Main menu for account system."""
    print("Welcome!")
    enter = input("Press Enter to continue or type 'x' to exit: ").strip().lower()
    
    if enter == "x":
        return

    while True:
        menu = input("[Account] or [Play] or [Exit]: ").strip().lower()
        if menu == "play":
            print("🎰 Slot machine coming soon!")
        elif menu == "account":
            account()
        elif menu == "exit":
            print("Goodbye!")
            break
        else:
            print("❌ Invalid option. Please type 'Account', 'Play', or 'Exit'.")

# Run the program
main()
 
 