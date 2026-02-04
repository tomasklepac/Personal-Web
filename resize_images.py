from PIL import Image
import os

def resize_image(input_path, output_path, size):
    try:
        with Image.open(input_path) as img:
            img = img.resize(size, Image.Resampling.LANCZOS)
            img.save(output_path, optimize=True)
            print(f"Created {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

def optimize_profile_image():
    input_path = "public/assets/images/profile.webp"
    output_path = "public/assets/images/profile-300.webp"
    try:
        with Image.open(input_path) as img:
            # Resize to 300x300 as requested
            img = img.resize((300, 300), Image.Resampling.LANCZOS)
            img.save(output_path, "WEBP", optimize=True, quality=80)
            print(f"Created {output_path}")
    except Exception as e:
        print(f"Error optimizing profile image: {e}")

def main():
    base_dir = "."
    logo_path = os.path.join(base_dir, "public/assets/images/logo_clear.png")
    
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} not found.")
        return

    # Favicon sizes
    sizes = [
        (16, 16),
        (32, 32),
        (48, 48),
        (180, 180), # Apple Touch Icon
        (192, 192), # Android Chrome
        (512, 512)  # Android Chrome
    ]

    for width, height in sizes:
        output_filename = f"favicon-{width}x{height}.png"
        if width == 180:
             output_filename = "apple-touch-icon.png"
        elif width >= 192:
             output_filename = f"android-chrome-{width}x{height}.png"
             
        output_path = os.path.join(base_dir, "public", output_filename)
        resize_image(logo_path, output_path, (width, height))
        
    optimize_profile_image()

if __name__ == "__main__":
    main()
