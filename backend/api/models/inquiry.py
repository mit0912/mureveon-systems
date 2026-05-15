from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class InquiryBase(BaseModel):
    full_name: str
    company_name: str
    email: EmailStr
    phone: str
    service_interest: str
    project_description: str
    budget_range: str

class InquiryCreate(InquiryBase):
    pass

class Inquiry(InquiryBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
