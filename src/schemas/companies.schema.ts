import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ContactInformation, Address, CompanyDetails, SocialNetworks } from './nested-company-fields.schema';

export type CompanyDocument = HydratedDocument<Company>;

@ObjectType()
@Schema()
export class Company {
    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop({required: true})
    name: string;

    @Field()
    @Prop({type: () => ContactInformation, required: true})
    contactInformation: ContactInformation;

    @Field()
    @Prop({type: () => Address, required: true})
    address: Address;

    @Field()
    @Prop({type: () => CompanyDetails, required: true})
    companyDetails: CompanyDetails;

    @Field({nullable: true})
    @Prop({type: () => SocialNetworks, required: false})
    socialNetworks: SocialNetworks;

    @Field()
    @Prop({default: Date.now })
    createdAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);