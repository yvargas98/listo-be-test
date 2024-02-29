import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/companies.schema'; 
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Company.name)
    private readonly companyModel: Model<CompanyDocument>
  ) {}

  getMongoUri(): string {
    return this.configService.get('MONGODB_URI');
  }

  async getAllCompanies(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async getCompanyById(id: string): Promise<Company> {
    return this.companyModel.findById(id).exec();
  }

  async createCompany(companyData: Partial<Company>): Promise<Company> {
    const createCompany = new this.companyModel(companyData);
    return createCompany.save();
  }

  async deleteCompany(id: string): Promise<Company> {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
