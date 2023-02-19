
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm, useFormContext } from 'react-hook-form';
import ApptextInput from '../../app/components/AppTextInput';
import Appcheckbox from '../../app/components/AppCheckbox';

export default function AddressForm() {
  const {control, formState} = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <ApptextInput control={control} name='fullName' label ='Full Name'/>
        </Grid>
        <Grid item xs={12}>
        <ApptextInput control={control} name='address1' label ='Address 1'/>
        </Grid>
        <Grid item xs={12}>        
        <ApptextInput control={control} name='address2' label ='Address 2'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ApptextInput control={control} name='city' label ='City'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ApptextInput control={control} name='state' label ='State'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ApptextInput control={control} name='zip' label ='Zip'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ApptextInput control={control} name='country' label ='Country'/>
        </Grid>
        <Grid item xs={12}>
            <Appcheckbox
              disabled={!formState.isDirty}
              name='saveAddress' 
              label='Save this as default address' 
              control = {control} />
        </Grid>
      </Grid>
    </>
  );
}
 