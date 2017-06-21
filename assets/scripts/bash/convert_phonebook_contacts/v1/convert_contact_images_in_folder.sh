#!/bin/bash

# save the first argument in a variable, clarifying its function
PATH_TO_INPUT_DIRECTORY=$1

# Exit if $PATH_TO_INPUT_DIRECTORY does not exits
if [ ! -d "$PATH_TO_INPUT_DIRECTORY" ]; then
  echo "Images directory $PATH_TO_INPUT_DIRECTORY not found."
  exit 1
fi

# define the path to the output directory
PATH_TO_OUTPUT_DIRECTORY="$PATH_TO_INPUT_DIRECTORY/output"

# create the output directory if it does not exist
if [ ! -d "$PATH_TO_OUTPUT_DIRECTORY" ]; then
  echo "Output directory $PATH_TO_OUTPUT_DIRECTORY does not exist. I am creating it."
  mkdir $PATH_TO_OUTPUT_DIRECTORY
fi

# loop through all the images
for IMAGE in $PATH_TO_INPUT_DIRECTORY/*.jpg; do
  # get the filename of the image
  INPUT_FILENAME=$(basename ${IMAGE%%.*})
  # define the path of the output image
  OUTPUT_IMAGE_PATH=$PATH_TO_OUTPUT_DIRECTORY/$INPUT_FILENAME.png
  # convert the image
  ./convert_contact_image.sh $IMAGE $OUTPUT_IMAGE_PATH
done

echo "SUCCESS: All images have been converted."
