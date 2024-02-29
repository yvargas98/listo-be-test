import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ContactInformation {
    @Field()
    email: string;

    @Field()
    phone: string;

    @Field()
    website: string;
}

@ObjectType()
export class Address {
    @Field({nullable: true})
    streetAddress: string;

    @Field()
    city: string;

    @Field()
    country: string;

    @Field({nullable: true})
    postalCode: string;
}

@ObjectType()
export class CompanyDetails {
    @Field({nullable: true})
    foundedOn: Date;

    @Field()
    numberOfEmployees: number;

    @Field({nullable: true})
    industry: string;

    @Field({nullable: true})
    description: string;
}

@ObjectType()
export class SocialNetworks {
    @Field({nullable: true})
    facebook: string;

    @Field({nullable: true})
    instagram: string;

    @Field({nullable: true})
    linkedIn: string;

    @Field({nullable: true})
    tiktok: string;
}

