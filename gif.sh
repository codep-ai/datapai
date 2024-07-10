import imageio
from PIL import Image

def reduce_gif_size(input_path, output_path, scale_factor=0.1, optimize=True):
    # Open the GIF file
    gif = imageio.mimread(input_path)

    # Get the duration of each frame
    duration = gif[0].meta['duration'] if 'duration' in gif[0].meta else 100

    # Reduce the dimensions of each frame
    resized_frames = []
    for frame in gif:
        img = Image.fromarray(frame)
        width, height = img.size
        new_width = int(width * scale_factor)
        new_height = int(height * scale_factor)
        resized_img = img.resize((new_width, new_height), Image.ANTIALIAS)
        resized_frames.append(resized_img)

    # Save the resized frames as a new GIF
    resized_frames[0].save(output_path, save_all=True, append_images=resized_frames[1:], duration=duration, loop=0, optimize=optimize)

# Example usage
input_file = '/Users/linlin/git/datapai/public/images/AWS-end-2-end.gif'
output_file = '/Users/linlin/git/datapai/public/images/AWS-2.gif'
reduce_gif_size(input_file, output_file, scale_factor=0.1, optimize=True)
