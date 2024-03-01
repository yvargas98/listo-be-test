import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Company } from './schemas/companies.schema';
import { AppService } from './app.service';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ContactInformationInput {
    @Field()
    email: string;

    @Field()
    phone: string;

    @Field()
    website: string;
}

@InputType()
export class AddressInput {
    @Field({nullable: true})
    streetAddress: string;

    @Field()
    city: string;

    @Field()
    country: string;

    @Field({nullable: true})
    postalCode: string;
}

@InputType()
export class CompanyDetailsInput {
    @Field({nullable: true})
    foundedOn: Date;

    @Field()
    numberOfEmployees: number;

    @Field({nullable: true})
    industry: string;

    @Field({nullable: true})
    description: string;
}

@InputType()
export class SocialNetworksInput {
    @Field({nullable: true})
    facebook: string;

    @Field({nullable: true})
    instagram: string;

    @Field({nullable: true})
    linkedIn: string;

    @Field({nullable: true})
    tiktok: string;
}

@InputType()
export class CompanyInput {
    @Field()
    name: string;

    @Field()
    contactInformation: ContactInformationInput

    @Field()
    address: AddressInput

    @Field()
    companyDetails: CompanyDetailsInput

    @Field({nullable: true})
    socialNetworks: SocialNetworksInput
}

@Resolver((of) => Company)
export class AppResolver {
    constructor(private readonly companyService: AppService) {}

    @Query(() => [Company])
    async companies(): Promise<Company[]> {
        return this.companyService.getAllCompanies();
    }

    @Query(() => Company, { nullable: true })
    async company(@Args('id') id: string): Promise<Company | null> {
        return await this.companyService.getCompanyById(id);
    }

    @Mutation(() => Company)
    async createCompany(@Args('input') companyInput: CompanyInput): Promise<Company> {
        return this.companyService.createCompany(companyInput);
    }

    @Mutation(() => Company, {nullable: true})
    async deleteCompany(@Args('id') id: string): Promise<Company | null> {
        return this.companyService.deleteCompany(id);
    }
}
