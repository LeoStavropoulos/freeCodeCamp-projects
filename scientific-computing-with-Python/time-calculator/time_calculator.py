def add_time(start, duration, day_of_week = None):
    weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    start_hours = int(start[:start.index(":")]);
    start_minutes = int(start[start.index(":") + 1:start.index(" ")]);
    start_indicator = start[start.index(" ") + 1:];
    duration_hours = int(duration[:duration.index(":")]);
    duration_minutes = int(duration[duration.index(":") + 1:]);

    if start_indicator == 'PM': start_hours += 12;

    new_minutes = start_minutes + duration_minutes;
    new_hours = new_minutes // 60;
    new_minutes = new_minutes % 60;


    new_hours += start_hours + duration_hours;
    extra_days = new_hours // 24;
    new_hours = new_hours % 24;

    new_indicator = " PM" if new_hours > 11 else " AM";
    new_time = str((new_hours - 1) % 12 + 1) + ":" + str(new_minutes).zfill(2) + new_indicator;
    
    if day_of_week: 
        day_of_week = weekdays[(weekdays.index(day_of_week.lower()) + extra_days) % 7];
        new_time += ", " + day_of_week.capitalize();

    new_time += " (next day)" if extra_days == 1 else " ({} days later)".format(extra_days) if extra_days > 1 else "";

    return new_time;
