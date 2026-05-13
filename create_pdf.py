import os
from PIL import Image

def create_pdf(image_folder, output_pdf):
    print(f"Creating PDF from {image_folder}...")
    images = []
    files = sorted([f for f in os.listdir(image_folder) if f.endswith('.png')])
    
    for filename in files:
        print(f"Adding {filename}...")
        img = Image.open(os.path.join(image_folder, filename))
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        images.append(img)
    
    if images:
        images[0].save(output_pdf, save_all=True, append_images=images[1:])
        print(f"Successfully created: {output_pdf}")
    else:
        print("Error: No images found.")

if __name__ == "__main__":
    create_pdf('screenshots_mobile', 'leader_diagnosis_latest.pdf')
