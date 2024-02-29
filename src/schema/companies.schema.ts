import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type CompanyDocument = HydratedDocument<Company>;

@ObjectType()
@Schema()
export class Company {
    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop({required: true})
    name: string;

    @Field({nullable:true})
    @Prop({required: false})
    city: string;

    @Field({nullable:true})
    @Prop({required: false})
    country: string;

    @Field({nullable:true})
    @Prop({required: false})
    email: string;

    @Field()
    @Prop({required: true})
    phone: string;

    @Field({nullable:true})
    @Prop({required: false})
    website: string;

    @Field({nullable:true})
    @Prop({required: false})
    companyType: string;

    @Field({nullable:true})
    @Prop({required: false})
    foundedOn: Date;

    @Field()
    @Prop({required: true})
    numberOfEmployees: number;

    @Field({nullable:true})
    @Prop({required: false})
    socialNetworks: string;

    @Field()
    @Prop({default: Date.now })
    createdAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);