import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
    @Prop({ required: true })
    streetAddress: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: false })
    country?: string;

    @Prop({ required: false })
    postalCode?: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
