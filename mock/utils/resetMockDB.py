import os
import json

# Determine paths
current_dir = os.path.dirname(os.path.abspath(__file__))
print(f"Current dir: {current_dir}")
mock_dir = os.path.join(current_dir, '..\..\mock\inMemory')
print(f"Mock dir: {mock_dir}")

# Get all files in the mock in-memory directory
files = [f for f in os.listdir(
    mock_dir) if os.path.isfile(os.path.join(mock_dir, f))]
print(f"Files: {files}")
# Object to store the final data
db = {}
#
# Process each file
for file in files:
    # Only process TypeScript files
    if file.endswith('.ts'):
        # Extract the entity name from the file name
        entity = os.path.splitext(file)[0]

        # Assumes the raw data is named as "<entity>Datas" (e.g., accountDatas)
        raw_data_array_name = f"{entity}Datas"
        print(f"Entity: {entity}, raw data array name: {raw_data_array_name}")

        # Dynamically import the module
        module = {}
        with open(os.path.join(mock_dir, file), 'r') as f:
            # This is a naive way to convert TypeScript exports to Python dicts.
            # Assumes the exports are at the end and in JSON-like format.
            for line in f.readlines():
                if raw_data_array_name in line:
                    data_str = line.split('=')[1].strip().rstrip(';')
                    module[raw_data_array_name] = json.loads(data_str)

        if raw_data_array_name in module:
            db[entity] = module[raw_data_array_name]
            print(f"Entity: {entity}, data: {db[entity]}")
#
# # Write to db.json
# output_path = os.path.join(current_dir, '..\mew_db.json')
# with open(output_path, 'w') as f:
#     json.dump(db, f, indent=2)
