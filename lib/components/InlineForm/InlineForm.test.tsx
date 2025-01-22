import { render, fireEvent } from '@testing-library/react';
import { InlineForm } from './InlineForm';

describe('InlineForm', () => {
    it('should call onSubmit with form data when form is submitted', () => {
        const mockOnSubmit = jest.fn();
        const formData = { name: 'test' };

        const { getByTestId } = render(
            <InlineForm onSubmit={mockOnSubmit}>
                <input name="name" defaultValue="test" data-testid="input" />
            </InlineForm>
        );

        fireEvent.submit(getByTestId('input').closest('form')!);
        expect(mockOnSubmit).toHaveBeenCalledWith(formData);
    });

    it('should call onChange with form data when form is changed', () => {
        const mockOnChange = jest.fn();
        const formData = { name: 'test' };

        const { getByTestId } = render(
            <InlineForm onChange={mockOnChange}>
                <input name="name" defaultValue="initial" data-testid="input"/>
            </InlineForm>
        );

        fireEvent.change(getByTestId('input'), { target: { value: 'test' } });

        expect(mockOnChange).toHaveBeenCalledWith(formData);
    });

    it('should render children correctly', () => {
        const { getByText } = render(
            <InlineForm>
                <div>Child Element</div>
            </InlineForm>
        );

        expect(getByText('Child Element')).toBeInTheDocument();
    });
});