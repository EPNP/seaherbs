import pandas as pd
import json

# Read data from the Excel file
excel_data = pd.read_excel('FreshHerb.xlsx')

# Convert the data to JSON
json_data = excel_data.to_json(orient='records')

# Write the JSON data to a file
with open('dataset_5.json', 'w') as file:
    file.write(json_data)
