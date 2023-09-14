# AzureAD/365 Graph Permissions

Your first ImmyBot tenant will be automatically linked to the Azure tenant that you signed up for ImmyBot with. You can link other ImmyBot tenants to Azure from the tenant Azure tab.

## Linking to an Azure Tenant

After creating an ImmyBot tenant, link it to an Azure tenant by navigating to the Azure tab in ImmyBot and entering the Azure tenant's principal id or domain and clicking `Save`.

## Azure Permission Level

Once your ImmyBot tenant has been linked to Azure, you can set the **Azure Permission Level** from the tenant Azure tab. This allows ImmyBot to:

1. Sync all users from the Azure tenant
2. Sync all users from your customer's tenants (if your Azure tenant is a Partner tenant)
3. Install the 365 applications a user is licensed for (Apps for business/Apps for entrprise/Project/Visio)
4. Deploy software to Teams, On-Premises Security Groups (Ex. Everyone in the Engineering Team gets AutoCAD 2022)

The **Azure Permission Level** has two options: _Default_ and _Custom_

### Default

In this mode, you don't need to create an app registration. You consent as an administrator, allowing ImmyBot access users in your tenant.

### Custom

In this mode, you create an app registration and provide its credentials to ImmyBot.

#### Create an App Registration

Navigate to: <https://aad.portal.azure.com/>

![](./.vuepress/images/2020-12-07-15-46-18.png)

![](./.vuepress/images/2020-12-07-15-47-07.png)

![](./.vuepress/images/2022-12-12_10-42-55.png)

**Important!** Your app registration must have a Web redirect uri of `https://<your-domain>.immy.bot/consent-callback`, replacing `<your-domain>` appropriately

#### Grant Permissions

See the screenshots below for the minimum permissions.

![](./.vuepress/images/2020-12-07-15-47-33.png)

![image](https://github.com/immense/immybot-documentation/assets/1424395/24640a0d-b078-4575-8125-e035788f06e8)

![image](https://github.com/immense/immybot-documentation/assets/1424395/f5c4ec0f-35f2-49ad-a690-7e940c187d0a)

#### Create Client Secret

![](./.vuepress/images/2021-08-16-13-19-15.png)

![](./.vuepress/images/2021-08-16-13-20-45.png)

![](./.vuepress/images/2021-08-16-13-23-26.png)

#### Assign GDAP Permissions to ImmyBot Service Principal

- Create a Security Group in Azure AD called "ImmyBot Security Group"
- Add the ImmyBot Service Principal to that group
- For each customer in the Partner Center, add the "ImmyBot Security Group" and add the "Directory Readers" and "Global Reader" role.

#### Copy the `Application (client) ID` and `Client Secret Value` into the form in ImmyBot.
