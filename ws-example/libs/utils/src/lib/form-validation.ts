import { FormControl, FormGroup } from "@angular/forms";

const getErrorDatePicker = (field: string, aliasError: 'invalid' | 'minDate' | 'maxDate', formGroup: FormGroup): boolean => {

  const VALIDATORS = {
    invalid: !!formGroup.get(field)?.errors?.ngbDate?.invalid,
    minDate: !!formGroup.get(field)?.errors?.ngbDate?.minDate,
    maxDate: !!formGroup.get(field)?.errors?.ngbDate?.maxDate,
  };

  return !!(VALIDATORS[aliasError] && formGroup.get(field)?.touched);
}

const getError = (field: string, aliasError: string, formGroup: FormGroup): boolean => {
    const getError =
        formGroup.get(field)?.hasError(aliasError) &&
        formGroup.get(field)?.touched;
    return !!getError;
}

const resetForm = ( formGroup: FormGroup) => {
    formGroup.reset();
    formGroup.markAsPristine();
    formGroup.markAsUntouched();
}

const isInvalid = (field: string, formGroup: FormGroup): boolean => {
    const hasError =
        formGroup.get(field)?.invalid && formGroup.get(field)?.touched;
    return !!hasError;
}

const validateAllFormFields = (formGroup: FormGroup) => {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control?.disabled){ return;}
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            validateAllFormFields(control);
        }
    });
}


export {
    validateAllFormFields,
    isInvalid,
    getError,
    getErrorDatePicker,
    resetForm
}