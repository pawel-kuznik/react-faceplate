import { render, fireEvent } from '@testing-library/react';
import { TextArea } from "./TextArea";
import { MutableRefObject } from 'react';

describe('TextArea', () => {
    it('should render textarea with correct attributes', () => {
        const { getByRole } = render(
            <TextArea 
                name="testName" 
                defaultValue="test value"
                rows={5}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.name).toBe('testName');
        expect(textarea.rows).toBe(5);
        expect(textarea.value).toBe('test value');
    });

    it('should render with placeholder', () => {
        const { getByRole } = render(
            <TextArea 
                placeholder="Enter your text here..."
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.placeholder).toBe('Enter your text here...');
    });

    it('should call onChange with the correct value', () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(
            <TextArea 
                onChange={mockOnChange}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        fireEvent.change(textarea, { target: { value: 'new value' } });

        expect(mockOnChange).toHaveBeenCalledWith('new value');
    });

    it('should call onBlur with the correct value', () => {
        const mockOnBlur = jest.fn();
        const { getByRole } = render(
            <TextArea 
                onBlur={mockOnBlur}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        fireEvent.blur(textarea, { target: { value: 'blur value' } });

        expect(mockOnBlur).toHaveBeenCalledWith('blur value');
    });

    it('should update valueRef on change and blur', () => {
        const valueRef: MutableRefObject<string> = { current: '' };
        const { getByRole } = render(
            <TextArea 
                valueRef={valueRef}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        fireEvent.change(textarea, { target: { value: 'changed value' } });
        expect(valueRef.current).toBe('changed value');

        fireEvent.blur(textarea, { target: { value: 'blur value' } });
        expect(valueRef.current).toBe('blur value');
    });

    it('should handle numeric defaultValue', () => {
        const { getByRole } = render(
            <TextArea 
                defaultValue={123}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.value).toBe('123');
    });

    it('should handle empty valueRef', () => {
        const { getByRole } = render(
            <TextArea 
                valueRef={{ current: '' }}
            />
        );

        const textarea = getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.value).toBe('');
    });
}); 