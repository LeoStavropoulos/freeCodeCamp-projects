import copy
import random

class Hat:
    def __init__(self, **balls):
        contents = list();
        for color in balls:
            for i in range(balls[color]):
                contents.append(color);
        self.contents = contents;

    def draw(self, num):
        if num > len(self.contents): return self.contents;
        out = list();
        for i in range(num):
            selection = random.randrange(0, len(self.contents));
            out.append(self.contents.pop(selection));
        return out;

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successful_count = 0;
    for i in range(num_experiments):
        copied_hat = copy.deepcopy(hat);
        result = copied_hat.draw(num_balls_drawn);
        is_successful = True;
        for color in expected_balls:
            if result.count(color) < expected_balls[color]: 
                is_successful = False;
                break;
        if is_successful: successful_count += 1;
    
    return successful_count / num_experiments;     