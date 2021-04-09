import {AbstractControl, ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(forbidddenName:RegExp):ValidatorFn{
    return (control: AbstractControl): { [key: string]: any; } | null => {
        const forbidden = forbidddenName.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}