import math

class Category:

    def __init__(self, name):
        self.name = name;
        self.ledger = list();

    def __str__(self):
        title = "{0:*^30s}\n".format(self.name)
        items = ""
        for item in self.ledger:
            items += item["description"][:23] if len(item["description"]) > 23 else item["description"].ljust(23);
            items += f'{item["amount"]:7.2f}\n'
        
        total = f"Total: {self.get_balance()}"
        
        return title + items + total

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description});
    
    def withdraw (self, amount, description=""):
        if not(self.check_funds(amount)): return False;
        self.ledger.append({"amount": -amount, "description": description});
        return True;

    def get_balance(self):
        sum = 0;
        for item in self.ledger:
            sum += item["amount"];
        return sum;

    def transfer(self, amount, category):
        if not(self.check_funds(amount)): return False;
        self.withdraw(amount, "Transfer to " + category.name);
        category.deposit(amount, "Transfer from " + self.name)

        return True;
    
    def check_funds(self, amount):
        return self.get_balance() >= amount;


def create_spend_chart(categories):
    total = 0;
    percentage = dict();
    returned = "Percentage spent by category\n";
    
    for ct in categories:
        for item in ct.ledger:
            if item['amount'] < 0: total += item['amount'];
    
    for ct in categories:
            ct_sum = 0;
            for item in ct.ledger:
                if item['amount'] < 0: ct_sum += item['amount'];
            percentage[ct] = 10 * math.floor(10 * ct_sum / total);

    for i in range(100, -10, -10):
        returned += "{:>3}| ".format(i);
        for ct in categories:
            returned += "o  " if percentage[ct] >= i else "   ";
        returned += "\n";

    returned += "    ----------\n";
    max_len = max([len(ct.name) for ct in categories]);
    for i in range(max_len):
        returned += "    ";   
        for ct in categories:
            returned += f" {ct.name[i]} " if i < len(ct.name) else "   ";
        returned += " " if i == max_len - 1 else " \n";
    
    return returned;