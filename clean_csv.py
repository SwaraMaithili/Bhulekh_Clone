import pandas as pd

# Load raw CSV
df = pd.read_csv('E:\dist_Vil_Tal.csv')  # replace with your raw CSV path

district_keywords = ['अकोला', 'अमरावती', 'बुलडाणा', 'यवतमाळ', 'वाशिम', 
                     'धाराशिव', 'छत्रपती संभाजीनगर', 'जालना', 'नांदेड', 
                     'परभणी', 'बीड', 'लातूर', 'हिंगोली', 'ठाणे', 'पालघर', 
                     'मंबई उपनगर', 'रत्नागिरी', 'रायगड', 'सिंधुदुर्ग', 'गडचिरोली', 
                     'गोंदिया', 'चंद्रपूर', 'नागपूर', 'भंडारा', 'वर्धा', 
                     'अहिल्यानगर', 'जळगाव', 'धुळे', 'नंदुरबार', 'नाशिक', 
                     'कोल्हापूर', 'पुणे', 'सांगली', 'सातारा', 'सोलापूर']

cleaned_rows = []

current_district = None
current_taluka = None

for row in df['raw_text']:
    row = str(row).strip()
    if row in district_keywords:
        current_district = row
    elif "Taluka" in row or "तालुका" in row:
        current_taluka = row
    elif row:
        # Treat as village
        cleaned_rows.append({
            'district': current_district,
            'taluka': current_taluka,
            'village': row
        })

clean_df = pd.DataFrame(cleaned_rows)
clean_csv_path = 'clean_maha_villages.csv'
clean_df.to_csv(clean_csv_path, index=False)
print("Clean CSV created:", clean_csv_path)