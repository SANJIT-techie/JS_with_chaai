// following the lock and key, checks all the conditions, whichever lock is opened with the key we execute it.

const month = "Mar".toLowerCase()

switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("march");
        break;
    case "apr":
        console.log("april");
        break;

    default:
        console.log("not found");
        
        break;
}

// here the "switch (value)" value is matched with the case " ":