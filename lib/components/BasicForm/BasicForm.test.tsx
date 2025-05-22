import { render, fireEvent } from '@testing-library/react';
import { BasicForm } from './BasicForm';

describe('BasicForm', () => {
    it('should call onSubmit with form data when form is submitted', () => {
        const mockOnSubmit = jest.fn();
        const formData = { name: 'test' };

        const { getByTestId } = render(
            <BasicForm onSubmit={mockOnSubmit}>
                <input name="name" defaultValue="test" data-testid="input" />
            </BasicForm>
        );

        fireEvent.submit(getByTestId('input').closest('form')!);
        expect(mockOnSubmit).toHaveBeenCalledWith(formData);
    });

    it('should call onChange with form data when form is changed', () => {
        const mockOnChange = jest.fn();
        const formData = { name: 'test' };

        const { getByTestId } = render(
            <BasicForm onChange={mockOnChange}>
                <input name="name" defaultValue="initial" data-testid="input"/>
            </BasicForm>
        );

        fireEvent.change(getByTestId('input'), { target: { value: 'test' } });

        expect(mockOnChange).toHaveBeenCalledWith(formData);
    });

    it('should render children correctly', () => {
        const { getByText } = render(
            <BasicForm>
                <div>Child Element</div>
            </BasicForm>
        );

        expect(getByText('Child Element')).toBeInTheDocument();
    });

    it("should pre-fill the form with initial data (simple input)", () => {
        const { getByTestId } = render(
            <BasicForm defaultValues={{ name: 'test' }}>
                <input name="name" data-testid="input" />
            </BasicForm>
        );

        expect((getByTestId('input') as HTMLInputElement).value).toBe('test');
    })

    it("should pre-fill the form with initial data (select)", () => {
        const { getByTestId } = render(
            <BasicForm defaultValues={{ name: 'test' }}>
                <select name="name" data-testid="select">
                    <option value="">Select</option>
                    <option value="test">Test</option>
                </select>
            </BasicForm>
        );

        expect((getByTestId('select') as HTMLInputElement).value).toBe('test');
    })

    it("should pre-fill the form with initial data (textarea)", () => {
        const { getByTestId } = render(
            <BasicForm defaultValues={{ name: 'test' }}>
                <textarea name="name" data-testid="textarea" />
            </BasicForm>
        );

        expect((getByTestId('textarea') as HTMLInputElement).value).toBe('test');
    })
});