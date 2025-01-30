/* General reset */
body, h5, b, input, textarea, div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Body styling */
body {
    background-color: #0b3d2e; /* Dark green-black background */
    color: #e0e0e0; /* Light gray text for contrast */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

/* Header styling */
h5 {
    font-size: 1.5rem;
    color: #1f6b4d; /* Slightly lighter dark green */
    margin: 20px 0;
    text-align: center;
}

/* Section divs */
.div_section {
    background-color: #102a20; /* Very dark green for sections */
    border: 1px solid #1f6b4d; /* Dark green border */
    border-radius: 8px;
    padding: 20px;
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

/* Inputs and checkboxes */
input[type="checkbox"] {
    margin-right: 10px;
    accent-color: #1f6b4d; /* Dark green for checkboxes */
}

input[type="file"] {
    margin: 10px 0;
    color: #e0e0e0;
    background-color: #1a4232; /* Dark green background */
    border: 1px solid #1f6b4d; /* Dark green border */
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}

/* Textarea styling */
textarea {
    background-color: #1a4232;
    color: #e0e0e0;
    border: 1px solid #1f6b4d;
    border-radius: 8px;
    padding: 10px;
    font-size: 0.9rem;
    resize: none;
}

/* Buttons */
button {
    background-color: #1f6b4d; /* Dark green background */
    color: #ffffff; /* White text */
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #285d46; /* Slightly lighter green on hover */
}

/* Specific IDs */
#div_playermaker {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#logger {
    background-color: #102a20;
    color: #e0e0e0;
    border: 1px solid #1f6b4d;
    border-radius: 8px;
    padding: 10px;
    font-family: Consolas, monospace;
    overflow-y: auto;
}

/* Links */
a {
    color: #1f6b4d; /* Dark green for links */
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Header Styles */
h5 {
    color: #ffffff; 
    font-size: 1.8rem;
    margin: 20px 0;
    text-align: center;
}

/* Section Styles */
.div_section {
    margin: 20px;
    padding: 15px;
    border: 2px solid #32a852; /* Lime green border */
    border-radius: 8px;
    background-color: #101810; /* Slightly darker green */
}

/* Labels and Input Fields */
label, input[type="checkbox"], input[type="file"] {
    font-size: 1rem;
    margin: 10px 0;
    color: #e0e0e0;
}

/* Input Fields */
input[type="file"] {
    background-color: #1e2921; /* Dark green */
    border: 1px solid #32a852;
    color: #e0e0e0;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
}

input[type="checkbox"] {
    transform: scale(1.2);
    margin-right: 5px;
}

/* Buttons and Actions */
button {
    background-color: #32a852; /* Lime green */
    color: #1a1a1a; /* Dark background for contrast */
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #228b22; /* Forest green */
}

/* Logger */
textarea#logger {
    background-color: #101810; /* Slightly darker green */
    color: #e0e0e0;
    border: 1px solid #32a852; /* Lime green border */
    padding: 10px;
    font-family: monospace;
    border-radius: 4px;
    resize: none;
}

/* Links */
a {
    color: #32a852; /* Lime green for links */
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #228b22; /* Forest green on hover */
}

/* Checkbox Containers */
#playermaker_uploadplayertblcontainer,
#playermaker_uploadplayernamestblcontainer,
#playermaker_uploaddcplayernamestblcontainer,
#templateuploadcontainer {
    margin: 15px 0;
}

/* Scrollbar for Modern Browsers */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #32a852; /* Lime green scrollbar */
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background-color: #1a1a1a; /* Matches body background */
}
