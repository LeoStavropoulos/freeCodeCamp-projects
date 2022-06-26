import re;
import operator;

def arithmetic_arranger(problems, answers = False):
    ops = { "+": operator.add, "-": operator.sub };
    
    if len(problems) > 5: return "Error: Too many problems."

    splitted_problems = [];
    
    for problem in problems:
        tmp = re.split("\s", problem);
        
        if tmp[1] not in ops.keys(): return "Error: Operator must be '+' or '-'.";
        if not(tmp[0].isdigit()) or not(tmp[2].isdigit()): return "Error: Numbers must only contain digits.";
        if len(tmp[0]) > 4 or len(tmp[2]) > 4: return "Error: Numbers cannot be more than four digits."
        
        if len(tmp[0]) > len(tmp[2]):
            tmp[2] = tmp[2].rjust(len(tmp[0]));
        elif len(tmp[0]) < len(tmp[2]):
            tmp[0] = tmp[0].rjust(len(tmp[2])); 

        tmp[0] = tmp[0].rjust(len(tmp[0]) + 2);
        splitted_problems.append(tmp);

    arranged_problems = "";
    
    for item in splitted_problems:
        arranged_problems += item[0] + "    ";
    
    arranged_problems = arranged_problems.rstrip() + "\n";

    for item in splitted_problems:
        arranged_problems += item[1] + " " + item[2] + "    ";
    
    arranged_problems = arranged_problems.rstrip() + "\n";

    for item in splitted_problems:
        for i in range(len(item[2]) + 2):
            arranged_problems += "-";
        
        arranged_problems += "    ";
    
    arranged_problems = arranged_problems.rstrip();

    if answers == True:

        arranged_problems += "\n";
        for item in splitted_problems:
            result = str(ops[item[1]](int(item[0]), int(item[2]))).rjust(len(item[2]) + 2);
            
            arranged_problems += result + "    ";

        arranged_problems = arranged_problems.rstrip();


    return arranged_problems;



print(arithmetic_arranger(['32 - 698', '1 - 3801', '45 + 43', '123 + 49', '988 + 40'], True))
print('   32         1      45      123      988\n'
        '- 698    - 3801    + 43    +  49    +  40\n'
        '-----    ------    ----    -----    -----\n'
        ' -666     -3800      88      172     1028')

