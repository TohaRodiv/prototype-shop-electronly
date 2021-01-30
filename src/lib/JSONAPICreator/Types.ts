export type TResourceIdentifierObjects = {
	/**
	 * @Required
	 */
	id: number
	/**
	 * @Required
	 */
	type: string
	/**
	 * Meta object
	 */
	meta?: TMetaValue
}


/**
 * The value of the relationships key MUST be an object (a “relationships object”). Members of the relationships object (“relationships”)
 * represent references from the resource object in which it’s defined to other resource objects.
 */
export type TRelationships = {
	/**
	 * Links object
	 */
	links?: TLinks
	/**
	 * Resource linkage
	 */
	data?: null | [] | TResourceIdentifierObjects | TResourceIdentifierObjects[]
	/**
	 * Meta object that contains non-standard meta-information about the relationship.
	 */
	meta?: TMetaValue
}


export type TAttributes = TMetaValue;


/**
 * “Resource objects” appear in a JSON:API document to represent resources
 */
export type TResourceObject = {
	/**
	 * The id member is not required when the resource object
	 * originates at the client and represents a new resource to be created on the server.
	 */
	id?: number
	/**
	 * @Required
	 */
	type: string
	/**
	 * Attributes object representing some of the resource’s data.
	 */
	attributes?: TAttributes
	/**
	 * Relationships object describing relationships between the resource and other JSON:API resources.
	 */
	relationships?: TRelationships
	/**
	 * Links object containing links related to the resource.
	 */
	links?: TLinks
	/**
	 *  Meta object containing non-standard meta-information about a resource that can not be represented
	 *  as an attribute or relationship.
	 */
	meta?: TMetaValue
}


export type TMetaValue = {
	[metaName: string]: string | number | string[] | number []
}


export type TPointerError = {
	/**
	 * JSON Pointer [RFC6901] to the associated entity in the request
	 * document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute].
	 */
	pointer?: string
	/**
	 * String indicating which URI query parameter caused the error.
	 */
	parameter?: string
}


export type TRelated = {
	href?: string
	meta?: TMetaValue
}


/**
 * Array of resource objects that are related to the primary data and/or each other (“included resources”).
 */
export type TIncluded = Array <TResourceObject>


export type TLinks = {
	self?: string
	related?: TRelated
}


export type TErrors = {
	/**
	 * Unique identifier for this particular occurrence of the problem
	 */
	id?: number
	/**
	 * Link that leads to further details about this particular occurrence of the problem.
	 */
	links?: TLinks
	/**
	 * HTTP status code applicable to this problem, expressed as a string value.
	 */
	status?: string
	/**
	 * Application-specific error code, expressed as a string value.
	 */
	code?: number
	/**
	 * Short, human-readable summary of the problem that SHOULD NOT change from occurrence
	 * to occurrence of the problem, except for purposes of localization.
	 */
	title?: string
	/**
	 * Human-readable explanation specific to this occurrence of the problem. Like title,
	 * this field’s value can be localized.
	 */
	detail?: string
	/**
	 * an object containing references to the source of the error
	 */
	source?: TPointerError
	/**
	 * Meta object containing non-standard meta-information about the error.
	 */
	meta: TMetaValue

}


export type TData = TResourceObject | TResourceObject[]


export type TMeta = TMetaValue & {
	copyright?: string
	author?: string
	authors?: string[]
}


export type TJSONAPI = {
	version: string
}


/**
 * @Url https://jsonapi.org/
 * A specification for building APIs in JSON
 */
export type TBody = {
	jsonapi?: TJSONAPI
	meta?: TMeta
	data?: TData
	errors?: TErrors
	links?: TLinks
	included?: TIncluded
}