export function filenameFromFile(file, date) {
    if (!file.name) {
        var now = date || new Date();
        // date
        var daynum = now.getDate();
        var day = daynum < 10 ? "0" + daynum : String(daynum);
        var monthnum = now.getMonth() + 1;
        var month = monthnum < 10 ? "0" + monthnum : String(monthnum);
        var year = now.getFullYear();
        // time
        var hour = now.getHours();
        var minutenum = now.getMinutes();
        var minute = minutenum < 10 ? "0" + minutenum : String(minutenum);
        var secondnum = now.getSeconds();
        var second = secondnum < 10 ? "0" + secondnum : String(secondnum);
        var datetime = day + "." + month + "." + year + "-" + hour + "." + minute + "." + second;
        file.name = "paste-" + datetime + ".jpg";
    }
    return file.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZW5hbWVfZnJvbV9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvQHNodWJveC9jb3JlL3NyYy9maWxlbmFtZV9mcm9tX2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSwyQkFBMkIsSUFBdUIsRUFBRSxJQUFXO0lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2QsSUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsT0FBTztRQUNQLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFJLE1BQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxRQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0IsT0FBTztRQUNQLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVwRSxJQUFNLFFBQVEsR0FBTSxHQUFHLFNBQUksS0FBSyxTQUFJLElBQUksU0FBSSxJQUFJLFNBQUksTUFBTSxTQUFJLE1BQVEsQ0FBQztRQUV2RSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVMsUUFBUSxTQUFNLENBQUM7S0FDckM7SUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbkIsQ0FBQyJ9