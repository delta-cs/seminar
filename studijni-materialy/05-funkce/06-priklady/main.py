def sum(a, b):
    result = a + b
    return result

def multiply(number):
    # přístup k vnější proměnné `mutliplier`
    result = number * multiplier
    return result

def changeMultiplier(newMultiplier):
    # změna vnější proměnné `mutliplier`
    global multiplier
    multiplier = newMultiplier


if __name__ == "__main__":
    multiplier = 3

    a = 2
    b = 3
    
    print(sum(a, b))
    
    print(multiply(a))
    
    changeMultiplier(4)
    
    print(multiply(a))
    
