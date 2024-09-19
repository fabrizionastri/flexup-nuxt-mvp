import os
import csv
import json

# Folder containing your CSV files
csv_folder = "."

# Output Python file
output_file = "data.py"

# Get all CSV files from the folder
csv_files = [f for f in os.listdir(csv_folder) if f.endswith(".csv")]

# Open the output file
with open(output_file, "w") as py_file:
    # Write a comment at the top of the file
    py_file.write("# Auto-generated Python data from CSV files\n\n")

    for csv_file in csv_files:
        file_path = os.path.join(csv_folder, csv_file)
        variable_name = os.path.splitext(csv_file)[0]  # Get filename without extension

        # Read the CSV file
        with open(file_path, "r", newline="", encoding="utf-8") as file:
            reader = csv.DictReader(file)
            data = list(reader)

        # Convert the list of dictionaries to a JSON-like format for writing into Python
        data_str = json.dumps(data, indent=4)

        # Write the variable to the Python file
        py_file.write(f"{variable_name} = {data_str}\n\n")

print(f"Data written to {output_file}")
