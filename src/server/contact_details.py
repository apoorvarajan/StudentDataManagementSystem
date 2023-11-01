class PhoneNumber:
    def __init__(self, number:str, country_code:str='+1'):
        self._number = self.validate_number(number)
        self._country_code = self.validate_country_code(country_code)

    @property
    def number(self):
        return self._number

    @property
    def country_code(self):
        return self._country_code

    @staticmethod
    def validate_number(number:str):
        if len(number) != 10:
            raise ValueError('Phone number must be 10 digits long')

        if not number.isdigit():
            raise ValueError('Phone number must be all digits')

        return number

    @staticmethod
    def validate_country_code(country_code:str):
        if len(country_code) > 4:
            raise ValueError('Country code must be less than 4 characters')

        if not country_code.startswith('+'):
            raise ValueError('Country code must start with a +')

        if not country_code[1:].isdigit():
            raise ValueError('Country code must be all digits')

        return country_code

    def __str__(self):
        return f'{self.country_code} {self.number}'

    def copy(self):
        return PhoneNumber(self.number, self.country_code)

class Address:
    def __init__(self, address_line1:str, address_line2:str, address_line3:str,
            city:str, state:str, country:str, zipcode:str):
        self._address_line1 = self.validate_address_line(address_line1)
        self._address_line2 = self.validate_address_line(address_line2)
        self._address_line3 = self.validate_address_line(address_line3)
        self._city = self.validate_city(city)
        self._state = self.validate_state(state)
        self._country = self.validate_country(country)
        self._zipcode = self.validate_zipcode(zipcode)

    @property
    def address_line1(self):
        return self._address_line1

    @property
    def address_line2(self):
        return self._address_line2

    @property
    def address_line3(self):
        return self._address_line3

    @property
    def city(self):
        return self._city

    @property
    def state(self):
        return self._state

    @property
    def country(self):
        return self._country

    @property
    def zipcode(self):
        return self._zipcode

    @staticmethod
    def validate_address_line(address_line:str):
        if len(address_line) > 100:
            raise ValueError('Address line must be less than 100 characters')

        return address_line

    @staticmethod
    def validate_city(city:str):
        if len(city) > 50:
            raise ValueError('City must be less than 50 characters')

        return city

    @staticmethod
    def validate_state(state:str):
        if len(state) > 50:
            raise ValueError('State must be less than 50 characters')

        return state

    @staticmethod
    def validate_country(country:str):
        if len(country) > 50:
            raise ValueError('Country must be less than 50 characters')

        return country

    @staticmethod
    def validate_zipcode(zipcode:str):
        if len(zipcode) > 10:
            raise ValueError('Zipcode must be less than 10 characters')

        if not zipcode.isdigit():
            raise ValueError('Zipcode must be all digits')

        return zipcode

    def __str__(self):
        return f'{self.address_line1}\n{self.address_line2}\n{self.address_line3}\n{self.city}, {self.state} {self.zipcode}\n{self.country}'

    def copy(self):
        return Address(self.address_line1, self.address_line2, self.address_line3,
            self.city, self.state, self.country, self.zipcode)

class EmergencyContact:
    def __init__(self, name:str, relationship:str, contact_details:'ContactDetails'):
        self._name = self.validate_name(name)
        self._relationship = self.validate_relationship(relationship)
        self._contact_details = contact_details

    @property
    def name(self):
        return self._name

    @property
    def relationship(self):
        return self._relationship

    @property
    def contact_details(self):
        return self._contact_details

    @staticmethod
    def validate_name(name:str):
        if len(name) > 100:
            raise ValueError('Name must be less than 100 characters')

        return name

    @staticmethod
    def validate_relationship(relationship:str):
        if len(relationship) > 50:
            raise ValueError('Relationship must be less than 50 characters')

        return relationship

    def copy(self):
        return EmergencyContact(self.name, self.relationship, self.contact_details)        

class ContactDetails:
    def __init__(self, primary_email:str, primary_phone:PhoneNumber,
            mailing_address:Address, permanent_address:Address,
            emergency_contact:EmergencyContact, other_emails:list[str],
            other_phones:list[PhoneNumber]
        ):
        self._primary_email = self.validate_email(primary_email)
        self._primary_phone = primary_phone
        self._mailing_address = mailing_address
        self._permanent_address = permanent_address
        self._emergency_contact = emergency_contact
        self._other_emails = [self.validate_email(email) for email in other_emails]
        self._other_phones = other_phones

    @property
    def primary_email(self):
        return self._primary_email

    @property
    def primary_phone(self):
        return self._primary_phone.copy()

    @property
    def mailing_address(self):
        return self._mailing_address.copy()

    @property
    def permanent_address(self):
        return self._permanent_address.copy()

    @property
    def emergency_contact(self):
        return self._emergency_contact.copy()

    @property
    def other_emails(self):
        return self._other_emails.copy()

    @property
    def other_phones(self):
        return self._other_phones.copy()

    @staticmethod
    def validate_email(email:str):
        if len(email) > 100:
            raise ValueError('Email must be less than 100 characters')

        if '@' not in email:
            raise ValueError('Email must contain an @')

        return email

    def copy(self):
        return ContactDetails(self.primary_email, self.primary_phone,
            self.mailing_address, self.permanent_address,
            self.emergency_contact, self.other_emails, self.other_phones)
