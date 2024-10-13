import { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';
import { ContentBox } from './ContentBox';
import { Button } from '../Button';
import { DataTable } from '../DataTable';
import { ImageBox } from '../ImageBox';
import { EditableHeading } from '../EditableHeading';

export default {
    title: 'components/ContentBox',
    component: ContentBox,
} as Meta<typeof ContentBox>;

type Story = StoryObj<typeof ContentBox>;

export const Bare: Story = {
    args: {
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
                <FormField type="text" label="Input one" name="one" />
                <FormField type="text" label="Input two" name="two" />
                <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
            </>
        )
    }
};

export const WithPattern: Story ={
    args: {
        label: "ContentBox label",
        pattern: "polka",
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
            </>
        )
    }
};

export const WithLabel: Story = {
    args: {
        label: "ContentBox label",
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
            </>
        )
    }
};

export const WithEditableLabel: Story = {
    args: {
        label: (<EditableHeading level={3} defaultValue={"ContentBox label"}/>),
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
            </>
        )
    }
};

export const WithSidebar: Story = {
    args: {
        sideToolbar: (
            <>
                <Button size="mini" />
                <Button size="mini" />
                <Button size="mini" />
            </>
        ),
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
            </>
        )
    }
};

export const WithDataTable: Story = {
    args: {
        children: (
            <>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
                </p>
                <DataTable
                    columns={[
                        { label: "Column 1" },
                        { label: "Column 2" },
                        { label: "Column 3" },
                    ]}
                    data={[
                        ["Cell 1", 1, 2],
                        ["Cell 2", 1, 2],
                        ["Cell 3", 1, 2],
                    ]}
                />
            </>
        )
    }
};

export const Nested: Story = {
    args: {
        children: (
            <>
                Just regular test
                <ContentBox label="Sub content box">
                    Sub content box content.
                </ContentBox>
                <ImageBox src="https://cataas.com/cat?height=100" height={"100px"}/>
                <ContentBox label="Last sub content box">
                    Last sub content box content.
                </ContentBox>
            </>
        )
    }
};

export const WithTopSidebar: Story = {
    args: {
        label: "Title",
        topToolbar: (
            <>
                <Button label="Important action"/>
                <Button size="mini" color="blue" />
                <Button size="mini" color="green" />
                <Button size="mini" color="red" />
            </>
        ),
        children: ( <div>Content</div> )
    }
};
