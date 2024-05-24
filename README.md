# Bitrix GDS

A library that makes requests to Bitrix API much easier.

## Installing

### Package manager

Using npm:

```
npm install bitrix-gds
```

Using yarn:

```
yarn add bitrix-gds
```
## Get Started


```
import { Bitrix24 } from 'bitrix-gds'

const bitrix24 = new Bitrix24(`https://YOUR_DOMAIN.bitrix24.{ru|com|de}/rest/{USER_ID}/{WEBHOOK_TOKEN}`)
```

### WEBHOOK_URL
  Create a inbound webhook in your bitrix.

  Copy and Paste the endpoint given by bitrix, as a param in Bitrix24 new instance.

## Methods

## Deals

### Add
```
const { result } = await bitrix.deals.add({ 
  fields: {
    TITLE: 'John Doe'
  }
})
```
#### Params
* fields - An object that specifies the parameter for a new deal (Not required)
* params - Set of parameters. REGISTER_SONET_EVENT (Not required)


### Get
```
const { result } = await bitrix.deals.get({ id: '00' })
```

#### Params
* id - deal ID.

### Delete
```
const { result } = await bitrix.deals.delete({ id: '00' })
```

#### Params
* id - deal ID.

### Fields
```
const { result } = await bitrix.deals.fields()
```

### List
```
const { result } = await bitrix.deals.list({
  filter: {
    STAGE_ID: '00'
  },
  select: ['*']
})
```

#### Params
* filter - Object of fields and values to filter deals. (Not required)
* select - Array of fields IDs that will return with the request response (Not required)
* order - Order the response 'ASC' or 'DESC' by fields. (Not required)
* start - Start of the request. (Not required)

### Update
```
const { result } = await bitrix.deals.get({ 
  id: '00',
  fields: {
    TITLE: 'John Doe'
  }
})
```

#### Params
* fields - Object of fields to be update.
* id - Deal ID.


## Contact

### Add
```
const { result } = await bitrix.contacts.add({ 
  fields: {
    NAME: 'John Doe'
  }
})
```

#### Params
* fields - An object that specifies the parameter for a new contact (Not required)
* params - Set of parameters. REGISTER_SONET_EVENT (Not required)

### Get
```
const { result } = await bitrix.contacts.get({ id: '00' })
```

#### Params
* id - Contact ID.

### Delete
```
const { result } = await bitrix.contacts.delete({ id: '00' })
```

#### Params
* id - Contact ID.

### Fields
```
const { result } = await bitrix.contacts.fields()
```

### List
```
const { result } = await bitrix.contacts.list({
  filter: {
    NAME: 'John Doe'
  },
  select: ['*']
})
```

#### Params
* filter - Object of fields and values to filter deals. (Not required)
* select - Array of fields IDs that will return with the request response (Not required)
* order - Order the response 'ASC' or 'DESC' by fields. (Not required)
* start - Start of the request. (Not required)

### Update
```
const { result } = await bitrix.contacts.get({ 
  id: '00',
  fields: {
    NAME: 'John Doe'
  }
})
```

#### Params
* fields - Object of fields to be update.
* id - Contact ID.

## Batch

```
const { result } = await bitrix.batch({ 
  req_1: {
    method: 'crm.deals.add',
    params: {
      fields: {
        TITLE: 'new deal'
      }
    }
  },
  req_2: {
    method: 'crm.contacts.list',
    params: {
      select: ['*']
    }
  }
})
```