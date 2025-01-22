import { render, fireEvent } from '@testing-library/react';
import { Input } from "./Input";
import { MutableRefObject } from 'react';

describe('Input', () => {
    it('should render input with correct attributes', () => {
        const { getByRole } = render(
            <Input 
                name="testName" 
                type="text" 
                min="1" 
                max="10" 
                defaultValue="testValue" 
                readonly 
            />
        );

        const input = getByRole('textbox') as HTMLInputElement;
        expect(input.name).toBe('testName');
        expect(input.type).toBe('text');
        expect(input.min).toBe('1');
        expect(input.max).toBe('10');
        expect(input.defaultValue).toBe('testValue');
        expect(input.readOnly).toBe(true);
    });

    it('should call onChange with the correct value', () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(
            <Input onChange={mockOnChange} name="input" />
        );

        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'value' } });

        expect(mockOnChange).toHaveBeenCalledWith('value');
    });

    it('should call onBlur with the correct value', () => {
        const mockOnBlur = jest.fn();
        const { getByRole } = render(
            <Input onBlur={mockOnBlur}/>
        );

        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.blur(input, { target: { value: 'blurValue' } });

        expect(mockOnBlur).toHaveBeenCalledWith('blurValue');
    });

    it('should update valueRef on change and blur', () => {
        const valueRef: MutableRefObject<string> = { current: '' };
        const { getByRole } = render(
            <Input valueRef={valueRef} />
        );

        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'newValue' } });
        expect(valueRef.current).toBe('newValue');

        fireEvent.blur(input, { target: { value: 'blurValue' } });
        expect(valueRef.current).toBe('blurValue');
    });
});