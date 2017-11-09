import { IReactionDisposer } from 'mobx';
import { Validator } from './Validator';
import { Form } from './Form';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
export declare type FormValueOptions<T> = {
    initialValue: T;
    validator?: Validator<T>;
    reaction?: (form: Form<any>) => IReactionDisposer;
};
export declare class FormValue<T = {}> {
    private form;
    private options;
    static isFormValue(t: any): t is FormValue<any>;
    private readonly _initialValue;
    private _value;
    private _errors;
    private _touched;
    private _isValidating;
    disabled: boolean;
    private validator?;
    private reaction?;
    private deferred;
    private validationSubject;
    constructor(form: Form<any>, options: FormValueOptions<T>);
    value: T;
    readonly errors: string[];
    isTouched: boolean;
    readonly isDirty: boolean;
    readonly isPristine: boolean;
    readonly isValidating: boolean;
    readonly isValid: boolean;
    disable(): void;
    enable(): void;
    dispose(): void;
    protected initialize: () => void;
    reset(): void;
    validate(): Promise<boolean>;
}
