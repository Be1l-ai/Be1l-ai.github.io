import random

def generate_problem():
    """
    Generate a random math problem using two operands and one operator.
    Returns the problem as a string and the correct answer.
    """
    operator = random.choice(["+", "-", "*"])
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    
    # Construct the problem as a string
    problem = f"{a} {operator} {b}"
    
    # Evaluate the answer. Using eval is acceptable here since the problem string is controlled.
    answer = eval(problem)
    return problem, answer

def main():
    score = 0
    total_questions = 0
    
    print("Welcome to the Math Challenge!")
    print("Solve as many math problems as you can.")
    print("Enter 'q' to quit at any time.\n")
    
    while True:
        # Generate a random math problem
        problem, answer = generate_problem()
        user_input = input(f"What is {problem}? (or type 'q' to quit): ")
        
        # Allow the user to exit the program
        if user_input.strip().lower() == 'q':
            break
        
        try:
            # Convert the user's answer to a float (to support both integers and decimals)
            user_answer = float(user_input)
        except ValueError:
            print("Invalid input! Please enter a valid number.\n")
            continue  # Skip this iteration and generate a new problem
        
        total_questions += 1
        
        # Compare the user's answer to the correct answer
        # Using a tolerance for float comparison
        if abs(user_answer - answer) < 1e-6:
            print("Correct!\n")
            score += 1
        else:
            print(f"Incorrect! The correct answer was {answer}.\n")
    
    # Display the final score
    print(f"You solved {score} out of {total_questions} problems correctly. Goodbye!")

if __name__ == "__main__":
    main()









