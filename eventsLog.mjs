import moment from "moment";

const eventsLog = {
    fetch: {
        successes: [],
        failures: [],
    },
    response: {
        successes: [],
        failures: [],
    },
};

console.log(eventsLogBuilder(eventsLog, "testing"));

/**
 * Constructs a txt ready string for reporting events from an object. The returned string is for a txt file.
 * @param {object} eventsLog Object containing the properties neccessary to make a report
 * @param {string} process   Name of the process that is being reported on. 
 * @return {string} A string for a txt file
 */
function eventsLogBuilder(eventsLog, process) {
    let report = ``;
    const newLine = "\n\r";

    // title
    report += `Events Log for ${process} ${moment().format()}` + newLine;
    report += newLine;

    // Fetches
    report += "Fetches" + newLine;

    report += "Successes" + newLine;
    eventsLog.fetch.successes.forEach(fSuc => {
        report += fSuc + newLine;
    });

    report += "Failures";
    eventsLog.fetch.failures.forEach(fFail => {
        report += fFail + newLine;
    });

    report += newLine + newLine;
    // responses
    report += "Responses" + newLine;
    
    report += "Successes" + newLine;
    eventsLog.response.successes.forEach(rSuc => {
        report += rSuc + newLine;
    });

    report += "Failures" + newLine;
    eventsLog.response.failures.forEach(rFail => {
        report += rFail + newLine;
    });

    report += newLine + "End of report";
    return report;
}