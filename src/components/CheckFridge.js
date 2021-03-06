import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Anchor, Box, Button, Form, FormField, Image, TextInput, TextArea } from 'grommet';

import { checkFridge } from '../redux/actions/fridge';

const CheckFridge = (props) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  
  const handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };

  const submitCheck = (check, fridgeData) => {
    dispatch(checkFridge(check, fridgeData, image));
    props.cancelCheck(false);
  }


  return (
    <Box>
              <input type="file" name="file" id="file" class="inputfile" onChange={handleImage} />
              <label for="file">Upload Fridge Picture</label>
              <Form onSubmit={(event) => submitCheck(event.value, props.f)}>
                <Box gap="small">
                  <FormField htmlFor="text">
                    <TextInput size="small" id="textinput-id" name="name" placeholder="Your Name (optional)" />
                  </FormField>
                  <FormField
                    name="notes"
                    label="Notes"
                    htmlFor="text-area"
                    component={TextArea}
                    placeholder="leave your notes about this check-in here!"
                  />

                  <Box direction="row" gap="xsmall" >
                    <Button size="small" active label="Cancel" onClick={() => props.cancelCheck(false)} />
                    <Button size="small" type="submit" primary label="Submit Check" />
                  </Box>

                </Box>
              </Form>
            </Box>
  )
};


export default CheckFridge;