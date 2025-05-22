import { render, fireEvent } from '@testing-library/react';
import { SelectInput } from "./SelectInput";
import { MutableRefObject } from 'react';

describe('SelectInput', () => {
    const defaultOptions = ['option1', 'option2', 'option3'];
    const defaultLabels = ['Option 1', 'Option 2', 'Option 3'];

    it('should render select with correct attributes', () => {
        const { getByRole } = render(
            <SelectInput 
                name="testName" 
                options={defaultOptions}
                labels={defaultLabels}
                defaultValue="option2"
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        expect(select.name).toBe('testName');
        expect((select as any).defaultValue).toBe('option2');
    });

    it('should render with placeholder', () => {
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                placeholder="Select an option..."
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        expect(select.firstChild).toHaveTextContent('Select an option...');
    });

    it('should call onChange with the correct value', () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                onChange={mockOnChange}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'option2' } });

        expect(mockOnChange).toHaveBeenCalledWith('option2');
    });

    it('should call onBlur with the correct value', () => {
        const mockOnBlur = jest.fn();
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                onBlur={mockOnBlur}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        fireEvent.blur(select, { target: { value: 'option3' } });

        expect(mockOnBlur).toHaveBeenCalledWith('option3');
    });

    it.only('should update valueRef on change and blur', () => {
        const valueRef: MutableRefObject<string> = { current: '' };
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                valueRef={valueRef}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'option1' } });
        expect(valueRef.current).toBe('option1');

        fireEvent.blur(select, { target: { value: 'option2' } });
        expect(valueRef.current).toBe('option2');
    });

    it('should render with function-based labels', () => {
        const labelFn = (option: string) => `Custom ${option}`;
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={labelFn}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        const options = select.getElementsByTagName('option');
        expect(options[1]).toHaveTextContent('Custom option2');
    });

    it('should render with titles/tooltips', () => {
        const titles = ['Title 1', 'Title 2', 'Title 3'];
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                titles={titles}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        const options = select.getElementsByTagName('option');
        expect(options[1]).toHaveAttribute('title', 'Title 2');
    });

    it('should render with function-based titles', () => {
        const titleFn = (option: string) => `Tooltip for ${option}`;
        const { getByRole } = render(
            <SelectInput 
                options={defaultOptions}
                labels={defaultLabels}
                titles={titleFn}
            />
        );

        const select = getByRole('combobox') as HTMLSelectElement;
        const options = select.getElementsByTagName('option');
        expect(options[1]).toHaveAttribute('title', 'Tooltip for option2');
    });
}); 