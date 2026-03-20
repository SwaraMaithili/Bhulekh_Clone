import os
import sys
import django
import pandas as pd

# -----------------------------
# 1️⃣ Setup Django environment
# -----------------------------
# Adjust this path if your backend folder structure is different
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(project_root)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bhulekh_clone.settings")
django.setup()

# -----------------------------
# 2️⃣ Import models
# -----------------------------
from core.models import District, Taluka, Village

# -----------------------------
# 3️⃣ Load CSV
# -----------------------------
csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "clean_maha_villages.csv")

# Read CSV using pandas (handles messy files better than csv.DictReader)
try:
    df = pd.read_csv(csv_path, header=None, encoding='utf-8')
except FileNotFoundError:
    print(f"CSV file not found at {csv_path}")
    sys.exit(1)

# Assign columns
df.columns = ['district', 'taluka', 'village']

# -----------------------------
# 4️⃣ Clean data
# -----------------------------
# Strip whitespace
df['district'] = df['district'].astype(str).str.strip()
df['taluka'] = df['taluka'].astype(str).str.strip()
df['village'] = df['village'].astype(str).str.strip()

# Drop empty rows
df = df[(df['district'] != '') & (df['taluka'] != '') & (df['village'] != '')]

# -----------------------------
# 5️⃣ Import into Django DB
# -----------------------------
for index, row in df.iterrows():
    district_name = row['district']
    taluka_name = row['taluka']
    village_name = row['village']

    # Create or get District
    d, _ = District.objects.get_or_create(name=district_name)

    # Create or get Taluka
    t, _ = Taluka.objects.get_or_create(name=taluka_name, district=d)

    # Create or get Village
    Village.objects.get_or_create(name=village_name, taluka=t)

print(f"✅ Imported {len(df)} rows successfully!")