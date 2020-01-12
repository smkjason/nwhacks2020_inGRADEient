export function formatLabelName(label) {
    let words = label.split("_");
    let formatted = "";
    for (let i = 0; i < words.length; i++) {
        formatted = formatted + " " + words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return formatted.slice(1);
}
