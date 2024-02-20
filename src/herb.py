
import pandas as pd
import json

# อ่านข้อมูลจากไฟล์ Excel
excel_data = pd.read_excel('FreshHerb.xlsx')

# แปลงข้อมูลเป็น JSON
json_data = excel_data.to_json(orient='records')

# พิมพ์ JSON สำหรับตรวจสอบ
print(json_data)

