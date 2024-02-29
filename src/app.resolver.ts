import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Company } from './schema/companies.schema';
import { AppService } from './app.service';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
    @Field()
    name: string;

    @Field({nullable: true})
    city: string;

    @Field({nullable: true})
    country: string;

    @Field({nullable: true})
    email: string;

    @Field()
    phone: string;

    @Field({nullable: true})
    website: string;

    @Field({nullable: true})
    companyType: string;

    @Field({nullable: true})
    foundedOn: Date;

    @Field()
    numberOfEmployees: number;

    @Field({nullable: true})
    socialNetworks: string;
}

@Resolver((of) => Company)
export class AppResolver {
    constructor(private readonly companyService: AppService) {}

    @Query(() => [Company])
    async companies(): Promise<Company[]> {
        return this.companyService.getAllCompanies();
    }

    @Query(() => Company)
    async company(@Args('id') id: string): Promise<Company> {
        return this.companyService.getCompanyById(id);
    }

    @Mutation(() => Company)
    async createCompany(@Args('input') companyInput: CompanyInput): Promise<Company> {
        return this.companyService.createCompany(companyInput);
    }

    @Mutation(() => Company)
    async deleteCompany(@Args('id') id: string): Promise<Company> {
        return this.companyService.deleteCompany(id);
    }
}
