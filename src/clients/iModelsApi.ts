/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Container for iModel object.
 */
export interface IModelResponse {
  /** Full representation of the iModel. */
  iModel?: IModel;
}

/**
 * Container for iModel object.
 */
export interface CreatediModelResponse {
  /** Full representation of the iModel. */
  iModel?: CreatediModel;
}

/**
 * Summarized representation of the iModel.
 */
export interface IModelSummary {
  /** Id of the iModel */
  id?: string;

  /** Display name of the iModel. Corresponds to Name property. */
  displayName?: string;
}

/**
 * Full representation of the iModel.
 */
export interface IModel {
  /** Id of the iModel */
  id?: string;

  /** Display name of the iModel. Corresponds to Name property. */
  displayName?: string;

  /** Name of the iModel. */
  name?: string;

  /** Description of the iModel. */
  description?: any;

  /** Date when the iModel was created. */
  createdDateTime?: string;

  /** Id of the project that iModel belongs to. */
  projectId?: string;

  /** A rectangular area on the Earth. A rectangular area is defined by two latitudes and two longitudes that represent the four sides of a rectangular area on the Earth. */
  extent?: Extent;

  /** Indicates the state of the iModel. Possible values: 'initialized', 'notInitialized'. */
  state?: "initialized" | "notInitialized";

  /** Hyperlinks to related data which complements this entity. */
  _links?: IModelLinks;
}

/**
 * Full representation of the iModel.
 */
export interface CreatediModel {
  /** Id of the iModel */
  id?: string;

  /** Display name of the iModel. Corresponds to Name property. */
  displayName?: string;

  /** Name of the iModel. */
  name?: string;

  /** Description of the iModel. */
  description?: any;

  /** Date when the iModel was created. */
  createdDateTime?: string;

  /** Id of the project that iModel belongs to. */
  projectId?: string;

  /** A rectangular area on the Earth. A rectangular area is defined by two latitudes and two longitudes that represent the four sides of a rectangular area on the Earth. */
  extent?: Extent;

  /** Indicates the state of the iModel. Possible values: 'initialized', 'notInitialized'. */
  state?: "initialized" | "notInitialized";

  /** Hyperlinks to related data which complements this entity. */
  _links?: CreatediModelLinks;
}

/**
 * Properties of the iModel to be created.
 */
export interface IModelCreate {
  /** Id of the Project that created iModel should belong to. */
  projectId: string;

  /** Name of the iModel. */
  name: string;

  /** Description of the iModel. */
  description?: any;

  /** A rectangular area on the Earth. A rectangular area is defined by two latitudes and two longitudes that represent the four sides of a rectangular area on the Earth. */
  extent?: Extent;

  /** Used for specifying the iModel template during iModel creation. */
  template?: IModelTemplate;

  /** Used for describing Baseline File during iModel creation. */
  baselineFile?: BaselineFileCreate;
}

/**
 * Properties of the iModel to be updated.
 */
export interface IModelUpdate {
  /** Name of the iModel. */
  name?: any;

  /** Description of the iModel. */
  description?: any;

  /** A rectangular area on the Earth. A rectangular area is defined by two latitudes and two longitudes that represent the four sides of a rectangular area on the Earth. */
  extent?: Extent;
}

/**
 * List of iModels.
 */
export interface IModelsMinimal {
  /** List of iModels. */
  iModels?: IModelSummary[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * List of iModels.
 */
export interface IModelsRepresentation {
  /** List of iModels. */
  iModels?: IModel[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * Used for specifying the iModel template during iModel creation.
 */
export interface IModelTemplate {
  /** Id of the iModel which to use as a template. */
  iModelId: string;

  /** iModel timeline point to use as a template identified by the Changeset. When Changeset is not provided baseline is used. */
  changesetId?: any;
}

/**
 * Used for describing Baseline File during iModel creation.
 */
export interface BaselineFileCreate {
  /**
   * Size of the Baseline File in bytes. It is important to set accurate file size or the iModel creation will fail later.
   * @format int64
   */
  size: number;
}

/**
 * Container for Baseline File object.
 */
export interface BaselineFileResponse {
  /** Metadata of Baseline File of the iModel. */
  baselineFile?: BaselineFile;
}

/**
 * Metadata of Baseline File of the iModel.
 */
export interface BaselineFile {
  /** Id of the Baseline File. */
  id?: string;

  /** Name of the Baseline File. */
  displayName?: string;

  /**
   * Size of the Baseline File in bytes.
   * @format int64
   */
  size?: number;

  /** Indicates the state of the Baseline File. 'initialized' - Baseline File is initialized. 'initializationScheduled' - Baseline File creation is complete and initialization is scheduled or currently in progress. 'waitingForFile' - file upload to file storage hasn't been completed yet. 'initializationFailed' - initializing Baseline File failed. 'fileIsBriefcase' - file is not a standalone iModel and cannot be used as a Baseline File. */
  state?: "initialized" | "initializationScheduled" | "initializationFailed" | "waitingForFile" | "fileIsBriefcase";

  /** Hyperlinks to Briefcase related data. */
  _links?: BaselineFileLinks;
}

/**
 * Container for Briefcase object.
 */
export interface BriefcaseResponse {
  /** Briefcase is a file holding a copy of an iModel. */
  briefcase?: Briefcase;
}

/**
 * Properties of the Breifcase to be acquired.
 */
export interface BriefcaseAcquire {
  /** Name of the device which will hold the briefcase. */
  deviceName?: any;
}

/**
 * Summarized representation of the Briefcase.
 */
export interface BriefcaseSummary {
  /** Id of the Briefcase. */
  id?: string;

  /** Display name of the Briefcase. Corresponds to id and deviceName properties. */
  displayName?: string;
}

/**
 * Briefcase is a file holding a copy of an iModel.
 */
export interface Briefcase {
  /** Id of the Briefcase. */
  id?: string;

  /** Id of the Briefcase as an integer. */
  briefcaseId?: number;

  /** Display name of the Briefcase. Corresponds to id and deviceName properties. */
  displayName?: string;

  /** Date when the Briefcase was acquired. */
  acquiredDateTime?: string;

  /** Size of the Briefcase in bytes. */
  fileSize?: number;

  /** Name of the device which will hold the briefcase. */
  deviceName?: any;

  /** Hyperlinks to Briefcase related data. */
  _links?: BriefcaseLinks;
}

/**
 * List of Briefcases in minimal representation.
 */
export interface BriefcasesMinimal {
  /** Briefcases of the iModel. */
  Briefcases?: BriefcaseSummary[];
}

/**
 * List of Briefcases in full representation.
 */
export interface BriefcasesRepresentation {
  /** Briefcases of the iModel. */
  Briefcases?: Briefcase[];
}

/**
 * Container for Checkpoint object.
 */
export interface CheckpointResponse {
  /** Metadata of a Checkpoint. */
  checkpoint?: Checkpoint;
}

/**
 * Metadata of a Checkpoint.
 */
export interface Checkpoint {
  /** Id of the Checkpoint. */
  id?: string;

  /** Display name of the Checkpoint. Corresponds to `changesetIndex` property. */
  displayName?: string;

  /**
   * Index of the target changeset.
   * @format int64
   */
  changesetIndex?: number;

  /** Id of the target changeset. */
  changesetId?: any;

  /** Indicates the state of the Checkpoint. `successful` - Checkpoint is successfully generated. `scheduled` - Checkpoint generation is scheduled or already in progress. `failed` - Checkpoint generation has failed. `notGenerated` - Checkpoint was not generated. */
  state?: "successful" | "scheduled" | "failed" | "notGenerated";

  /** Contains information required to access an Azure Blob storage container. */
  containerAccessInfo?: ContainerAccessInfo;

  /** Hyperlinks to Checkpoint related data. */
  _links?: CheckpointLinks;
}

/**
 * Contains information required to access an Azure Blob storage container.
 */
export interface ContainerAccessInfo {
  /** Name of the account. */
  account?: string;

  /** Name of the container. */
  container?: string;

  /** Shared access signature. */
  sas?: string;

  /** Database name. */
  dbName?: string;
}

/**
 * Properties of Changeset to be created.
 */
export interface ChangesetCreate {
  /** Id of the changeset. */
  id: string;

  /** Description of the Changeset. */
  description?: any;

  /** Id of the parent Changeset. */
  parentId?: any;

  /** Id of the briefcase that will be used to create the Changeset. */
  briefcaseId: number;

  /** Size of the Changeset file in bytes. */
  fileSize: number;

  /** Describes what type of changes Changeset contains. Tells what changes changeset contains. 0 - regular, 1 - schema, 2 - definition, 4 - spatial data, 8 - sheets and drawings, 16 - views and models, 32 - global properties. ContainingChanges is flag value, therefore all change types, except Schema, can be combined. */
  containingChanges?: any;
}

/**
 * Properties of Changeset to be updated.
 */
export interface ChangesetUpdate {
  /** Id of the briefcase that was used to create the Changeset. */
  briefcaseId: number;

  /** Indicates the state of the Changeset. Should be set to 'fileUploaded'. */
  state: "waitingForFile" | "fileUploaded";
}

/**
 * Container for Changeset object.
 */
export interface ChangesetResponse {
  /** Changeset represents a file containing changes to the iModel. A single Changeset contains changes made on a single Briefcase file and pushed as a single file. */
  changeset?: Changeset;
}

/**
 * Container for Created Changeset object.
 */
export interface CreatedChangesetResponse {
  /** Changeset represents a file containing changes to the iModel. A single Changeset contains changes made on a single Briefcase file and pushed as a single file. */
  changeset?: CreatedChangeset;
}

/**
 * Summarized representation of the Changeset.
 */
export interface ChangesetSummary {
  /** Id of the changeset. */
  id?: string;

  /** Display name of the Changeset. Corresponds to Index property. */
  displayName?: string;

  /** Description of the Changeset. */
  description?: any;

  /** Index of the Changeset (increasing, but not necessarily sequential). */
  index?: number;

  /** Id of the parent Changeset. */
  parentId?: any;

  /** Id of the user who created the Changeset. */
  creatorId?: string;

  /** Date when the Changeset was pushed to iModelHub. */
  pushDateTime?: string;

  /** Id of the briefcase that was used to push the Changeset. */
  briefcaseId?: number;

  /** Size of the Changeset file in bytes. */
  fileSize?: number;

  /** Describes what type of changes Changeset contains. Tells what changes changeset contains. 0 - regular, 1 - schema, 2 - definition, 4 - spatial data, 8 - sheets and drawings, 16 - views and models, 32 - global properties. ContainingChanges is flag value, therefore all change types, except Schema, can be combined. */
  containingChanges?: number;

  /** Indicates the state of the Changeset. 'waitingForFile' - indicates that Changeset metadata is created, but Changeset file is not uploaded yet or file upload is not confirmed yet. 'fileUploaded' - indicates that Changeset file is uploaded and confirmed. */
  state?: "waitingForFile" | "fileUploaded";

  /** Hyperlinks to Changeset related data. */
  _links?: ChangesetLinksSummary;
}

/**
 * Changeset represents a file containing changes to the iModel. A single Changeset contains changes made on a single Briefcase file and pushed as a single file.
 */
export interface Changeset {
  /** Id of the changeset. */
  id?: string;

  /** Display name of the Changeset. Corresponds to Index property. */
  displayName?: string;

  /** Description of the Changeset. */
  description?: string;

  /** Index of the Changeset (increasing, but not necessarily sequential). */
  index?: number;

  /** Id of the parent Changeset. */
  parentId?: any;

  /** Id of the user who created the Changeset. */
  creatorId?: string;

  /** Date when the Changeset was pushed to iModelHub. */
  pushDateTime?: string;

  /** Id of the briefcase that was used to push the Changeset. */
  briefcaseId?: number;

  /** Size of the Changeset file in bytes. */
  fileSize?: number;

  /** Describes what type of changes Changeset contains. Tells what changes changeset contains. 0 - regular, 1 - schema, 2 - definition, 4 - spatial data, 8 - sheets and drawings, 16 - views and models, 32 - global properties. ContainingChanges is flag value, therefore all change types, except Schema, can be combined. */
  containingChanges?: number;

  /** Indicates the state of the Changeset. 'waitingForFile' - indicates that Changeset metadata is created, but Changeset file is not uploaded yet or file upload is not confimerd yet. 'fileUploaded' - indicates that Changeset file is uploaded and confirmed. */
  state?: "waitingForFile" | "fileUploaded";

  /** Information about the client application that is related to an entity. */
  application?: Application;

  /** Information about synchronization that is related to a Changeset. This information is set by applications that perform iModel synchronization. */
  synchronizationInfo?: SynchronizationInfo;

  /** Hyperlinks to Changeset related data. */
  _links?: ChangesetLinks;
}

/**
 * Changeset represents a file containing changes to the iModel. A single Changeset contains changes made on a single Briefcase file and pushed as a single file.
 */
export interface CreatedChangeset {
  /** Id of the changeset. */
  id?: string;

  /** Display name of the Changeset. Corresponds to Index property. */
  displayName?: string;

  /** Description of the Changeset. */
  description?: any;

  /** Index of the Changeset (increasing, but not necessarily sequential). */
  index?: number;

  /** Id of the parent Changeset. */
  parentId?: any;

  /** Id of the user who created the Changeset. */
  creatorId?: any;

  /** Date when the Changeset was pushed to iModelHub. */
  pushDateTime?: any;

  /** Id of the briefcase that was used to push the Changeset. */
  briefcaseId?: number;

  /** Size of the Changeset file in bytes. */
  fileSize?: number;

  /** Describes what type of changes Changeset contains. 0 - regular, 1 - schema, 2 - definition, 4 - spatial data, 8 - sheets and drawings, 16 - views and models, 32 - global properties. ContainingChanges is flag value, therefore all change types, except Schema, can be combined. */
  containingChanges?: number;

  /** Indicates the state of the Changeset. 'waitingForFile' - indicates that Changeset metadata is created, but Changeset file is not uploaded yet or file upload is not confimerd yet. 'fileUploaded' - indicates that Changeset file is uploaded and confirmed. */
  state?: "waitingForFile" | "fileUploaded";

  /** Information about the client application that is related to an entity. */
  application?: Application;

  /** Information about synchronization that is related to a Changeset. This information is set by applications that perform iModel synchronization. */
  synchronizationInfo?: SynchronizationInfo;

  /** Hyperlinks to Changeset related data. */
  _links?: CreatedChangesetLinks;
}

/**
 * List of Changesets in minimal representation.
 */
export interface ChangesetsMinimal {
  /** Changesets of the iModel. */
  changesets?: ChangesetSummary[];
}

/**
 * List of Changesets in full representation.
 */
export interface ChangesetsRepresentation {
  /** Changesets of the iModel. */
  changesets?: Changeset[];
}

/**
 * Container for Named Version object.
 */
export interface NamedVersionResponse {
  /** Full representation of the Named Version. */
  namedVersion?: NamedVersion;
}

/**
 * Properties of the Named Version to be created.
 */
export interface NamedVersionCreate {
  /** Named Version name. */
  name: string;

  /** Description of the Named Version. */
  description?: any;

  /** Id of the Changeset that the Named Version will be created for. If not provided a baseline iModel Named Version will be created. */
  changesetId?: any;
}

/**
 * Properties of the Named Version to be updated.
 */
export interface NamedVersionUpdate {
  /** Named Version name. */
  name?: any;

  /** Description of the Named Version. */
  description?: any;

  /** Indicates the state of the named version. 'hidden' - indicates that Named Version should be hidden in the user interface. 'visible' - indicates that Named Nersion should be visible in the user interface. */
  state?: "hidden" | "visible";
}

/**
 * Summarized representation of the Named Version.
 */
export interface NamedVersionSummary {
  /** Id of the Named Version. */
  id?: string;

  /** Display name of the Named Version. Corresponds to Name property. */
  displayName?: string;

  /** Id of the Changeset that the Named Version is created for. */
  changesetId?: any;

  /**
   * Index of the Changeset that the Named Version is created for.
   * @format int64
   */
  changesetIndex?: number;
}

/**
 * List of Named Versions in minimal representation.
 */
export interface NamedVersionsMinimal {
  /** List of Named Versions of the iModel. */
  namedVersions?: NamedVersionSummary[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * List of Named Versions in full representation.
 */
export interface NamedVersionsRepresentation {
  /** List of Named Versions of the iModel. */
  namedVersions?: NamedVersion[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * Full representation of the Named Version.
 */
export interface NamedVersion {
  /** Id of the Named Version. */
  id?: string;

  /** Display name of the Named Version. Corresponds to Name property. */
  displayName?: string;

  /** Id of the Changeset that the Named Version is created for. */
  changesetId?: any;

  /**
   * Index of the Changeset that the Named Version is created for.
   * @format int64
   */
  changesetIndex?: number;

  /** Named Version name. */
  name?: string;

  /** Description of the Named Version. */
  description?: any;

  /** Date when the Named Version was created. */
  createdDateTime?: string;

  /** Indicates the state of the named version. 'hidden' - indicates that Named Version should be hidden in the user interface. 'visible' - indicates that Named Version should be visible in the user interface. */
  state?: "hidden" | "visible";

  /** Hyperlinks to Named Version related data. */
  _links?: NamedVersionLinks;
}

/**
 * Container for user object.
 */
export interface UserResponse {
  /** Full representation of the user. */
  user?: User;
}

/**
 * Summarized representation of the user.
 */
export interface UserSummary {
  /** Id of the user. */
  id?: string;

  /** Display name of the user. Corresponds to Email property. */
  displayName?: string;

  /** Hyperlinks to User related data. */
  _links?: UserLinks;
}

/**
 * Full representation of the user.
 */
export interface User {
  /** Id of the user. */
  id?: string;

  /** Display name of the user. Corresponds to Email property. */
  displayName?: string;

  /** Given name of the user. */
  givenName?: string;

  /** Surname of the user. */
  surname?: string;

  /** E-mail address of the user. */
  email?: string;

  /** Hyperlinks to User related data. */
  _links?: UserLinks;
}

/**
 * List of users in minimal representation.
 */
export interface UsersMinimal {
  /** List of users who have ever been connected to the iModel. */
  Users?: UserSummary[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * List of users in full representation.
 */
export interface UsersRepresentation {
  /** List of users who have ever been connected to the iModel. */
  Users?: User[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * Representation of a Lock.
 */
export interface Lock {
  /**
   * Briefcase Id.
   * @format int32
   */
  briefcaseId?: number;

  /** An array of locked objects. */
  lockedObjects?: LockedObjects[];
}

/**
 * Container for Lock object.
 */
export interface LockResponse {
  /** Representation of a Lock. */
  lock?: Lock;
}

/**
 * List of Locks.
 */
export interface LocksResponse {
  /** List of locks. */
  locks?: Lock[];

  /** URLs for redoing the current request, getting to the previous or next page of results, if applicable. */
  _links?: PagingLinks;
}

/**
 * Properties of locks to be updated.
 */
export interface UpdateLocks {
  /**
   * Briefcase Id for which to update locks.
   * @format int32
   */
  briefcaseId?: number;

  /** Changeset Id. Meant to identify the latest Changeset in which the locked object was updated. If this value points to an older Changeset than the value saved in the server acquiring locks will fail. */
  changesetId?: any;

  /** An array of locked objects. */
  lockedObjects?: LockedObjects[];
}

/**
 * Contains a list of locked object ids and their lock level.
 */
export interface LockedObjects {
  /** Indicates the lock level. Possible values: 'none' - used for realeasing already acquired locks, 'shared' - multiple Briefcases can acquire a shared lock on the same object, 'exclusive' - only one Briefcase can acquire an exclusive lock on a given object. */
  lockLevel?: "none" | "shared" | "exclusive";

  /** List of locked object ids. Allowed values are hexadecimal strings with '0x' prefix. */
  objectIds?: string[];
}

/**
 * The binary image file
 * @format binary
 */
export type Image = File;

/**
 * Hyperlinks to related data which complements this entity.
 */
export interface EntityLinks {
  /** Hyperlink container. */
  creator?: Link;
}

/**
 * Hyperlinks to Named Version related data.
 */
export interface NamedVersionLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  changeset?: Link;
}

/**
 * Hyperlinks to related data which complements this entity.
 */
export interface IModelLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  changesets?: Link;

  /** Hyperlink container. */
  namedVersions?: Link;
}

/**
 * Hyperlinks to related data which complements this entity.
 */
export interface CreatediModelLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  changesets?: Link;

  /** Hyperlink container. */
  namedVersions?: Link;

  /** Hyperlink container. */
  upload?: Link;

  /** Hyperlink container. */
  complete?: Link;
}

/**
 * Hyperlinks to Briefcase related data.
 */
export interface BaselineFileLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  download?: Link;
}

/**
 * Hyperlinks to Briefcase related data.
 */
export interface BriefcaseLinks {
  /** Hyperlink container. */
  owner?: Link;
}

/**
 * Hyperlinks to Checkpoint related data.
 */
export interface CheckpointLinks {
  /** Hyperlink container. */
  download?: Link;
}

/**
 * Hyperlinks to Changeset related data.
 */
export interface ChangesetLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  namedVersion?: Link;

  /** Hyperlink container. */
  self?: Link;

  /** Hyperlink container. */
  download?: Link;

  /** Hyperlink container. */
  currentOrPrecedingCheckpoint?: Link;
}

/**
 * Hyperlinks to Changeset related data.
 */
export interface CreatedChangesetLinks {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  namedVersion?: Link;

  /** Hyperlink container. */
  self?: Link;

  /** Hyperlink container. */
  upload?: Link;

  /** Hyperlink container. */
  complete?: Link;
}

/**
 * Hyperlinks to Changeset related data.
 */
export interface ChangesetLinksSummary {
  /** Hyperlink container. */
  creator?: Link;

  /** Hyperlink container. */
  self?: Link;
}

/**
 * Hyperlinks to User related data.
 */
export interface UserLinks {
  /** Hyperlink container. */
  self?: Link;
}

/**
 * Hyperlink container.
 */
export interface Link {
  /** Hyperlink to the specific entity. */
  href?: string;
}

/**
 * A rectangular area on the Earth. A rectangular area is defined by two latitudes and two longitudes that represent the four sides of a rectangular area on the Earth.
 */
export interface Extent {
  /** A point on the Earth specified by a latitude and longitude. */
  southWest: Point;

  /** A point on the Earth specified by a latitude and longitude. */
  northEast: Point;
}

/**
 * A point on the Earth specified by a latitude and longitude.
 */
export interface Point {
  /**
   * Latitude. Latitude ranges between -90 and 90 degrees, inclusive.
   * @format double
   * @min -90
   * @max 90
   */
  latitude: number;

  /**
   * Longitude. Longitude ranges between -180 and 180 degrees, inclusive.
   * @format double
   * @min -180
   * @max 180
   */
  longitude: number;
}

/**
 * URLs for redoing the current request, getting to the previous or next page of results, if applicable.
 */
export interface PagingLinks {
  /** Hyperlink container. */
  self?: Link;

  /** Hyperlink container. */
  prev?: Link;
}

/**
 * Information about the client application that is related to an entity.
 */
export interface Application {
  /** Application name. */
  name?: string;
}

/**
 * Information about synchronization that is related to a Changeset. This information is set by applications that perform iModel synchronization.
 */
export interface SynchronizationInfo {
  /** List of source file names that contained changes which were synchronized to this Changeset. */
  changedFiles?: string[];
}

/**
 * List of permission user has on a given iModel.
 */
export interface Permissions {
  /** Array of permissions user has on an iModel. */
  permissions?: string[];
}

/**
 * Returned in some specific cases from Locks request and contains additional information about the object ids that caused the error.
 */
export interface LocksErrorResponse {
  /** Contains error information and an array of object ids that are causing the error. */
  error: LocksError;
}

/**
 * Returned when acquiring Locks fails due to conflicts and contains additional information about the conflicting Locks.
 */
export interface ConflictingLocksErrorResponse {
  /** Contains error information and additional information about conflicting Locks. */
  error: ConflictingLocksError;
}

/**
 * Contains error information and an array of object ids that are causing the error.
 */
export interface LocksError {
  /** One of a server-defined set of error codes. */
  code: string;

  /** A human-readable representation of the error. */
  message: string;

  /** Contains object ids that are causing the error. */
  objectIds?: string[];
}

/**
 * Contains error information and additional information about conflicting Locks.
 */
export interface ConflictingLocksError {
  /** One of a server-defined set of error codes. */
  code: string;

  /** A human-readable representation of the error. */
  message: string;

  /** Contains information about conflicting locks. */
  conflictingLocks?: ConflictingLock[];
}

/**
 * Contains information about a conflicting lock.
 */
export interface ConflictingLock {
  /** Object id that caused the conflict. */
  objectId: string;

  /** The level of conflicting lock. Possible values are 'shared', 'exclusive'. */
  lockLevel: "shared" | "exclusive";

  /** An array of briefcase ids that own this lock. */
  briefcaseIds: number[];
}

/**
 * Contains error information and an optional array of more specific errors.
 */
export interface Error {
  /** One of a server-defined set of error codes. */
  code: string;

  /** A human-readable representation of the error. */
  message: string;

  /** Optional array of more specific errors. */
  details?: ErrorDetails[];
}

/**
 * Contains error information.
 */
export interface ErrorDetails {
  /** One of a server-defined set of error codes. */
  code: string;

  /** A human-readable representation of the error. */
  message: string;
}

/**
 * Gives details for an error that occurred while handling the request. Note that clients MUST NOT assume that every failed request will produce an object of this schema, or that all of the properties in the response will be non-null, as the error may have prevented this response from being constructed.
 */
export interface ErrorResponse {
  /** Contains error information and an optional array of more specific errors. */
  error: Error;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.bentley.com/imodels";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title iModels
 * @version v1
 * @baseUrl https://api.bentley.com/imodels
 *
 * iModelHub is the control center for iModels. It is responsible for coordinating concurrent access to iModels as well as changes made to them in a form of [Changesets](https://www.itwinjs.org/learning/glossary/#changeset).
 *
 * Overview of [iModelHub](https://www.itwinjs.org/learning/imodelhub/) and [iModels](https://www.itwinjs.org/learning/imodels/).
 *
 * These APIs lets you retrieve metadata about the iModels pushed to iModelHub. To view, create or update your iModels use [iModel.js](https://www.itwinjs.org/) client libraries.
 */
export class myImodelsApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description --- Retrieves a list of iModels belonging to the specified Project. ### Notes The `Prefer` header can be used to specify how much result metadata is desired by the client. The `Prefer` request header field is used to indicate that particular server behaviors are preferred by the client but are not required for successful completion of the request. This operation supports `"return=representation"` and `"return=minimal"` preferences. The `"return=representation"` preference indicates that the client prefers that the server include an entity representing the current state of the resource in the response to a successful request. The `"return=minimal"` preference indicates that the client wishes the server to return only a minimal response to a successful request. This is the default preference if `Prefer` header is not specified. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
   *
   * @tags iModels
   * @name GetProjectImodels
   * @summary Get Project iModels
   * @request GET:/
   * @secure
   */
  getProjectImodels = (
    query: { projectId: string; $skip?: number; $top?: number; $orderBy?: string; name?: string },
    params: RequestParams = {},
  ) =>
    this.request<IModelsMinimal, ErrorResponse>({
      path: `/`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });

  /**
   * @description --- Creates an [iModel](https://www.itwinjs.org/learning/glossary/#imodel). There are three different ways to create an iModel. ### Create an empty iModel To create an empty iModel do not provide `template` and `baselineFile` properties. ### Create an iModel from an existing iModel To create an iModel from another iModel provide `template` property. The server will apply changesets up to the one specified by `changesetId` property to the source iModel file and use it as a Baseline File for the newly created iModel. User must have `imodels_read` permissions to the source iModel. Source and target projects must be in the same data center. ### Create an iModel using a Baseline File. Creating an iModel using a Baseline File allows to upload a custom iModel file that will become the base file of the created iModel. There are three steps in creating an iModel from a Baseline File: 1. Create a new iModel and provide `baselineFile` property. **It is important to provide correct file size or the iModel creation will fail in the later steps.** 2. Upload Baseline File to blob storage using `upload` property link from the response of iModel creation. ``` Request syntax: PUT upload HTTP/1.1 Request headers: x-ms-blob-type: BlockBlob ``` 3. Complete the iModel creation by confirming that Baseline File was uploaded successfully. See [Complete iModel Baseline Upload](https://developer.bentley.com/apis/imodels/operations/complete-imodel-baseline-file-upload/) operation for the documentation. ### iModel initialization When creating an empty iModel it will be initialized immediately. When creating an iModel using `template` or `baselineFile` properties initialization will be scheduled and it's state is reflected in the `state` property. For a more detailed information about initialization state see [Get iModel Baseline File](https://developer.bentley.com/apis/operations/get-imodel-baseline-file/) operation. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must be an Organization Administrator for the Organization that owns a given Project or have `imodels_manage` permission assigned at the Project level. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
   *
   * @tags iModels
   * @name CreateImodel
   * @summary Create iModel
   * @request POST:/
   * @secure
   */
  createImodel = (data: IModelCreate, params: RequestParams = {}) =>
    this.request<CreatediModelResponse, ErrorResponse>({
      path: `/`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });

  id = {
    /**
     * @description --- Uploads a thumbnail file. Request content should be binary content of an image. Supported thumbnail types are 'image/png' or 'image/jpeg', but once uploaded 'image/jpeg' will be converted to 'image/png'. Maximum supported thumbnail size is 5 megabytes. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_manage` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_manage` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Thumbnails
     * @name UploadImodelThumbnail
     * @summary Upload iModel Thumbnail
     * @request PUT:/{id}/thumbnail
     * @secure
     */
    uploadImodelThumbnail: (id: string, data: Image, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/${id}/thumbnail`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description --- Retrieves a thumbnail file. Returned thumbnails will be 'image/png' type. One may specify either the *small* or *large* thumbnail via the *size* query parameter.  If *size* is not specified, the small thumbnail will be returned. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Thumbnails
     * @name GetImodelThumbnail
     * @summary Download iModel Thumbnail
     * @request GET:/{id}/thumbnail
     * @secure
     */
    getImodelThumbnail: (id: string, query?: { size?: "small" | "large" }, params: RequestParams = {}) =>
      this.request<Image, ErrorResponse>({
        path: `/${id}/thumbnail`,
        method: "GET",
        query: query,
        secure: true,
        format: "blob",
        ...params,
      }),

    /**
     * @description --- Retrieves a list of permissions the user has for the specified iModel. iModels permissions may be configured on a Project level or an iModel level. This operation will return permissions configured for this specific iModel or Project permissions if iModel permissions are not configured. `imodels_webview` - allows to view iModel in web browser, but does not allow to get its local copy and view in desktop app. `imodels_read` - allows to open and view an iModel only in read-only state. `imodels_write` - allows to make changes to an iModel. Allows to create and modify named versions. Allows to create mapping between PW connection and iModel to facilitate bridges. `imodels_manage` - allows to create an iModel. Allows to configure access per iModel. Allows to manage locks, codes or local copies for the entire iModel. This permission is both iModel and Project level permission, but Create iModel operation requires that user has `imodels_manage` permission on the Project level. Use Projects API to check if user can create an iModel on a given Project. `imodels-delete` - allows to delete an iModel. This permission is only available on the Project level. Use Projects API to check if user can delete iModels on a given Project. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Permissions
     * @name GetImodelUserPermissions
     * @summary Get iModel User Permissions
     * @request GET:/{id}/permissions
     * @secure
     */
    getImodelUserPermissions: (id: string, params: RequestParams = {}) =>
      this.request<Permissions, ErrorResponse>({
        path: `/${id}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Creates the metadata of a [Changeset](https://www.itwinjs.org/learning/glossary/#changeset). For more information on creating and retrieving Changesets using iModel.js see [working with Changesets](https://www.itwinjs.org/learning/imodelhub/briefcases/). **Important: This operation should only be used by iTwin.js. For creating and uploading a valid Changeset please use iTwin.js libraries.** Pushing a Changeset consists of three steps: 1. Create Changeset metadata. 2. Upload Changeset file to blob storage using `upload` property link from the response of Changeset metadata creation. ``` Request syntax: PUT upload HTTP/1.1 Request headers: x-ms-blob-type: BlockBlob ``` 3. Complete the Changeset push by confirming that Changeset file was uploaded successfully. See [Update iModel Changeset](https://developer.bentley.com/apis/imodels/operations/update-imodel-changeset/) operation for the documentation. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_write` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_write` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Changesets
     * @name CreateImodelChangeset
     * @summary Create iModel Changeset
     * @request POST:/{id}/changesets
     * @secure
     */
    createImodelChangeset: (id: string, data: ChangesetCreate, params: RequestParams = {}) =>
      this.request<CreatedChangesetResponse, ErrorResponse>({
        path: `/${id}/changesets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves a list of [Changesets](https://www.itwinjs.org/learning/glossary/#changeset) for the iModel specified by the iModel id. [Changesets](https://www.itwinjs.org/learning/glossary/#changeset) form a linear timeline of the iModel changes. For more information on creating and retrieving Changesets using iModel.js see [working with Changesets](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Notes The `Prefer` header can be used to specify how much result metadata is desired by the client. The `Prefer` request header field is used to indicate that particular server behaviors are preferred by the client but are not required for successful completion of the request. This operation supports `"return=representation"` and `"return=minimal"` preferences. The `"return=representation"` preference indicates that the client prefers that the server include an entity representing the current state of the resource in the response to a successful request. The `"return=minimal"` preference indicates that the client wishes the server to return only a minimal response to a successful request. This is the default preference if `Prefer` header is not specified. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. **Note:** `download` property requires user to have at least `imodels_read` permission. If user has only `imodels_webview` permission `download` will always be null. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Changesets
     * @name GetImodelChangesets
     * @summary Get iModel Changesets
     * @request GET:/{id}/changesets
     * @secure
     */
    getImodelChangesets: (
      id: string,
      query?: { $top?: number; $skip?: number; $orderBy?: string; afterIndex?: number; lastIndex?: number },
      params: RequestParams = {},
    ) =>
      this.request<ChangesetsMinimal, ErrorResponse>({
        path: `/${id}/changesets`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description --- Complete [iModel](https://www.itwinjs.org/learning/glossary/#imodel) creation from Baseline File by confirming that file was uploaded to file storage. Baseline File is the base iModel file that does not have any changesets applied. For creating an iModel from a custom Baseline File see [Create iModel using a Baseline File](https://developer.bentley.com/apis/imodels/operations/create-imodel/#createanimodelusingabaselinefile). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must be an Organization Administrator for the Organization that owns a given Project or have `imodels_manage` permission assigned at the Project level. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Baseline Files
     * @name CompleteImodelBaselineFileUpload
     * @summary Complete iModel Baseline File Upload
     * @request POST:/{id}/baselinefile
     * @secure
     */
    completeImodelBaselineFileUpload: (id: string, params: RequestParams = {}) =>
      this.request<BaselineFileResponse, ErrorResponse>({
        path: `/${id}/baselinefile`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves the metadata of a Baseline File. Baseline File is the base iModel file that does not have any changesets applied. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. **Note:** `download` property requires user to have at least `imodels_read` permission. If user has only `imodels_webview` permission `download` will always be null. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Baseline Files
     * @name GetImodelBaselineFileDetails
     * @summary Get iModel Baseline File Details
     * @request GET:/{id}/baselinefile
     * @secure
     */
    getImodelBaselineFileDetails: (id: string, params: RequestParams = {}) =>
      this.request<BaselineFileResponse, ErrorResponse>({
        path: `/${id}/baselinefile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Update metadata of the [iModel](https://www.itwinjs.org/learning/glossary/#imodel). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_manage` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_manage` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags iModels
     * @name UpdateImodel
     * @summary Update iModel
     * @request PATCH:/{id}
     * @secure
     */
    updateImodel: (id: string, data: IModelUpdate, params: RequestParams = {}) =>
      this.request<IModelResponse, ErrorResponse>({
        path: `/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Deletes [iModel](https://www.itwinjs.org/learning/glossary/#imodel). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must be an Organization Administrator for the Organization that owns a given Project or have `imodels_delete` permission assigned at the Project level. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags iModels
     * @name DeleteImodel
     * @summary Delete iModel
     * @request DELETE:/{id}
     * @secure
     */
    deleteImodel: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description --- Retrieves the metadata of an [iModel](https://www.itwinjs.org/learning/glossary/#imodel). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags iModels
     * @name GetImodelDetails
     * @summary Get iModel
     * @request GET:/{id}
     * @secure
     */
    getImodelDetails: (id: string, params: RequestParams = {}) =>
      this.request<IModelResponse, ErrorResponse>({
        path: `/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Checkpoint is a pre-processed iModel baseline file that has changes up to a certain Changeset already applied and is stored on the server. This can be used to reduce number of Changesets needed to apply to get to a certain version of the iModel. A Checkpoint is generated when a Named Version is created for that changeset. Checkpoint can be stored in two different ways: 1. `download` property will have a Azure Blob storage link to a full `.bim` file that has changes applied up to the Changeset specified by `changesetIndex` and `changesetId` properties. 2. `containerAccessInfo` will have an access key to Azure Blob container that stores the Checkpoint in 4 MB blocks. **Important: This property should only be used by iTwin.js libraries.** A successfully generated Checkpoint will have one or both of these properties. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_read` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_read` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Named Versions
     * @name GetNamedVersionCheckpoint
     * @summary Get Named Version Checkpoint
     * @request GET:/{id}/namedversions/{namedVersionId}/checkpoint
     * @secure
     */
    getNamedVersionCheckpoint: (id: string, namedVersionId: string, params: RequestParams = {}) =>
      this.request<CheckpointResponse, ErrorResponse>({
        path: `/${id}/namedversions/${namedVersionId}/checkpoint`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Acquires requested locks on specified objects. Lock - the right to modify a specific type of data within the iModel. For more information on Locks [see working with Locks via iTwin.js client libraries](https://www.itwinjs.org/learning/backend/concurrencycontrol/#pessimistic-concurrency-control). **Note:** Lock types have been removed for this API and should be ignored. **Object ids Limit:** Currently there can be at most 1000 object ids in a single request. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization To release any Locks (set `LockLevel` to `none`) user must have `imodels_manage` permission assigned at the iModel level. If permissions at the iModel level are not configured, then user must have `imodels_manage` permission assigned at the Project level. To acquire or realese Locks that the user owns `imodels_write` permission is enough. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Locks
     * @name UpdateImodelLocks
     * @summary Update iModel Locks
     * @request PATCH:/{id}/locks
     * @secure
     */
    updateImodelLocks: (id: string, data: UpdateLocks, params: RequestParams = {}) =>
      this.request<LockResponse, ErrorResponse | ConflictingLocksErrorResponse>({
        path: `/${id}/locks`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Queries locks of the iModel. Lock - the right to modify a specific type of data within the iModel. For more information on Locks [see working with Locks via iTwin.js client libraries](https://www.itwinjs.org/learning/backend/concurrencycontrol/#pessimistic-concurrency-control). **Note:** Lock types have been removed for this API and should be ignored. ### Paging Page size refers to total size of returned `objectIds` throughout all returned instances. If several Lock instances are returned that does not necessarily mean that instance is complete and more `objectIds` might be returned for that specific instance in a different page. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Locks
     * @name GetImodelLocks
     * @summary Get iModel Locks
     * @request GET:/{id}/locks
     * @secure
     */
    getImodelLocks: (
      id: string,
      query?: { $skip?: number; $top?: number; briefcaseId?: number },
      params: RequestParams = {},
    ) =>
      this.request<LocksResponse, ErrorResponse>({
        path: `/${id}/locks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Acquires a new [Briefcase](https://www.itwinjs.org/learning/glossary/#briefcase). Briefcases are the local copies of iModel that users can acquire to work with the iModel. Users can make changes to their copy of iModel and then push them as a single Changeset file into iModelHub. For more information on Briefcases see [working with Briefcases](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_read` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_read` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Briefcases
     * @name AcquireImodelBriefcase
     * @summary Acquire iModel Briefcase
     * @request POST:/{id}/briefcases
     * @secure
     */
    acquireImodelBriefcase: (id: string, data: BriefcaseAcquire, params: RequestParams = {}) =>
      this.request<BriefcaseResponse, ErrorResponse | Error>({
        path: `/${id}/briefcases`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves a list of [Briefcases](https://www.itwinjs.org/learning/glossary/#briefcase) for the iModel specified by the iModel id. Briefcases are the local copies of iModel that users can acquire to work with the iModel. Users can make changes to their copy of iModel and then push them as a single Changeset file into iModelHub. For more information on Briefcases see [working with Briefcases](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Notes The `Prefer` header can be used to specify how much result metadata is desired by the client. The `Prefer` request header field is used to indicate that particular server behaviors are preferred by the client but are not required for successful completion of the request. This operation supports `"return=representation"` and `"return=minimal"` preferences. The `"return=representation"` preference indicates that the client prefers that the server include an entity representing the current state of the resource in the response to a successful request. The `"return=minimal"` preference indicates that the client wishes the server to return only a minimal response to a successful request. This is the default preference if `Prefer` header is not specified. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Briefcases
     * @name GetImodelBriefcases
     * @summary Get iModel Briefcases
     * @request GET:/{id}/briefcases
     * @secure
     */
    getImodelBriefcases: (
      id: string,
      query?: { $top?: number; $skip?: number; ownerId?: "me" },
      params: RequestParams = {},
    ) =>
      this.request<BriefcasesMinimal, ErrorResponse>({
        path: `/${id}/briefcases`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description --- Retrieves the details about the user. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Users
     * @name GetImodelUserDetails
     * @summary Get iModel User
     * @request GET:/{id}/users/{userId}
     * @secure
     */
    getImodelUserDetails: (id: string, userId: string, params: RequestParams = {}) =>
      this.request<UserResponse, ErrorResponse>({
        path: `/${id}/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves a list of Named Versions for the iModel specified by the iModel id. Every [Changeset](https://www.itwinjs.org/learning/glossary/#changeset) on the timeline creates a new version of the iModel. However, some points on the timeline can represent important milestones or significant events to be saved. iModelHub provides a way to mark a point on the timeline with a name. These time points are referred to as Named Versions. ### Notes The `Prefer` header can be used to specify how much result metadata is desired by the client. The `Prefer` request header field is used to indicate that particular server behaviors are preferred by the client but are not required for successful completion of the request. This operation supports `"return=representation"` and `"return=minimal"` preferences. The `"return=representation"` preference indicates that the client prefers that the server include an entity representing the current state of the resource in the response to a successful request. The `"return=minimal"` preference indicates that the client wishes the server to return only a minimal response to a successful request. This is the default preference if `Prefer` header is not specified. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Named Versions
     * @name GetImodelNamedVersions
     * @summary Get iModel Named Versions
     * @request GET:/{id}/namedversions
     * @secure
     */
    getImodelNamedVersions: (
      id: string,
      query?: { $top?: number; $skip?: number; $orderBy?: string; name?: string },
      params: RequestParams = {},
    ) =>
      this.request<NamedVersionsMinimal, ErrorResponse>({
        path: `/${id}/namedversions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description --- Create a [Named Version](https://www.itwinjs.org/learning/glossary/#namedversion). Every [Changeset](https://www.itwinjs.org/learning/glossary/#changeset) on the timeline creates a new version of the iModel. However, some points on the timeline can represent important milestones or significant events to be saved. iModelHub provides a way to mark a point on the timeline with a name. These time points are referred to as Named Versions. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_write` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_write` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Named Versions
     * @name CreateImodelNamedVersion
     * @summary Create iModel Named Version
     * @request POST:/{id}/namedversions
     * @secure
     */
    createImodelNamedVersion: (id: string, data: NamedVersionCreate, params: RequestParams = {}) =>
      this.request<NamedVersionResponse, ErrorResponse>({
        path: `/${id}/namedversions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Checkpoint is a pre-processed iModel baseline file that has changes up to a certain Changeset already applied and is stored on the server. This can be used to reduce number of Changesets needed to apply to get to a certain version of the iModel. A Checkpoint is generated when a Named Version is created for that changeset. Checkpoint can be stored in two different ways: 1. `download` property will have a Azure Blob storage link to a full `.bim` file that has changes applied up to the Changeset specified by `changesetIndex` and `changesetId` properties. 2. `containerAccessInfo` will have an access key to Azure Blob container that stores the Checkpoint in 4 MB blocks. **Important: This property should only be used by iTwin.js libraries.** A successfully generated Checkpoint will have one or both of these properties. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_read` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_read` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Changesets
     * @name GetChangesetCheckpoint
     * @summary Get Changeset Checkpoint
     * @request GET:/{id}/changesets/{changeset}/checkpoint
     * @secure
     */
    getChangesetCheckpoint: (id: string, changeset: string, params: RequestParams = {}) =>
      this.request<CheckpointResponse, ErrorResponse>({
        path: `/${id}/changesets/${changeset}/checkpoint`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Confirm that [Changeset](https://www.itwinjs.org/learning/glossary/#changeset) file has been uploaded to file storage and finalize Changeset push. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_write` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_write` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Changesets
     * @name UpdateImodelChangeset
     * @summary Update iModel Changeset
     * @request PATCH:/{id}/changesets/{changesetId}
     * @secure
     */
    updateImodelChangeset: (id: string, changesetId: string, data: ChangesetUpdate, params: RequestParams = {}) =>
      this.request<ChangesetResponse, ErrorResponse>({
        path: `/${id}/changesets/${changesetId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves the details of a [Briefcase](https://www.itwinjs.org/learning/glossary/#briefcase). Briefcases are the local copies of iModel that users can acquire to work with the iModel. Users can make changes to their copy of iModel and then push them as a single Changeset file into iModelHub. For more information on Briefcases see [working with Briefcases](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Briefcases
     * @name GetImodelBriefcaseDetails
     * @summary Get iModel Briefcase
     * @request GET:/{id}/briefcases/{briefcaseId}
     * @secure
     */
    getImodelBriefcaseDetails: (id: string, briefcaseId: number, params: RequestParams = {}) =>
      this.request<BriefcaseResponse, ErrorResponse>({
        path: `/${id}/briefcases/${briefcaseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Deletes the specified [Briefcase](https://www.itwinjs.org/learning/glossary/#briefcase). Briefcases are the local copies of iModel that users can acquire to work with the iModel. Users can make changes to their copy of iModel and then push them as a single Changeset file into iModelHub. For more information on Briefcases see [working with Briefcases](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization To release any Briefcase user must have `imodels_manage` permission assigned at the iModel level. If permissions at the iModel level are not configured, then user must have `imodels_manage` permission assigned at the Project level. To release a Briefcase that the user owns `imodels_webview` permission is enough. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Briefcases
     * @name ReleaseImodelBriefcase
     * @summary Release iModel Briefcase
     * @request DELETE:/{id}/briefcases/{briefcaseId}
     * @secure
     */
    releaseImodelBriefcase: (id: string, briefcaseId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/${id}/briefcases/${briefcaseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description --- Retrieves the metadata of a [Changeset](https://www.itwinjs.org/learning/glossary/#changeset). For more information on creating and retrieving Changesets using iModel.js see [working with Changesets](https://www.itwinjs.org/learning/imodelhub/briefcases/). ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. **Note:** `download` property requires user to have at least `imodels_read` permission. If user has only `imodels_webview` permission `download` will always be null. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Changesets
     * @name GetImodelChangesetDetails
     * @summary Get iModel Changeset
     * @request GET:/{id}/changesets/{changeset}
     * @secure
     */
    getImodelChangesetDetails: (id: string, changeset: string, params: RequestParams = {}) =>
      this.request<ChangesetResponse, ErrorResponse>({
        path: `/${id}/changesets/${changeset}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves the details of a Named Version. Every [Changeset](https://www.itwinjs.org/learning/glossary/#changeset) on the timeline creates a new version of the iModel. However, some points on the timeline can represent important milestones or significant events to be saved. iModelHub provides a way to mark a point on the timeline with a name. These time points are referred to as Named Versions. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Named Versions
     * @name GetImodelNamedVersionDetails
     * @summary Get iModel Named Version
     * @request GET:/{id}/namedversions/{namedVersionId}
     * @secure
     */
    getImodelNamedVersionDetails: (id: string, namedVersionId: string, params: RequestParams = {}) =>
      this.request<NamedVersionResponse, ErrorResponse>({
        path: `/${id}/namedversions/${namedVersionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Update metadata of a [Named Version](https://www.itwinjs.org/learning/glossary/#namedversion). Every [Changeset](https://www.itwinjs.org/learning/glossary/#changeset) on the timeline creates a new version of the iModel. However, some points on the timeline can represent important milestones or significant events to be saved. iModelHub provides a way to mark a point on the timeline with a name. These time points are referred to as Named Versions. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:modify`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_write` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_write` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Named Versions
     * @name UpdateImodelNamedVersion
     * @summary Update iModel Named Version
     * @request PATCH:/{id}/namedversions/{namedVersionId}
     * @secure
     */
    updateImodelNamedVersion: (
      id: string,
      namedVersionId: string,
      data: NamedVersionUpdate,
      params: RequestParams = {},
    ) =>
      this.request<NamedVersionResponse, ErrorResponse>({
        path: `/${id}/namedversions/${namedVersionId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description --- Retrieves a list of users who have ever been connected to the iModel specified by the iModel id. ### Notes The `Prefer` header can be used to specify how much result metadata is desired by the client. The `Prefer` request header field is used to indicate that particular server behaviors are preferred by the client but are not required for successful completion of the request. This operation supports `"return=representation"` and `"return=minimal"` preferences. The `"return=representation"` preference indicates that the client prefers that the server include an entity representing the current state of the resource in the response to a successful request. The `"return=minimal"` preference indicates that the client wishes the server to return only a minimal response to a successful request. This is the default preference if `Prefer` header is not specified. ### Authentication Requires `Authorization` header with valid Bearer token for scope `imodels:read`. For more documentation on authorization and how to get access token visit [OAUTH2 Authorization](https://developer.bentley.com/apis/overview/authorization/) page. ### Authorization User must have `imodels_webview` permission assigned at the iModel level and at least `imodels_webview` permission assigned at the Project level. If permissions at the iModel level are not configured, then user must have `imodels_webview` permission assigned at the Project level. Alternatively the user should be an Organization Administrator for the Organization that owns a given Project the iModel belongs to. An Organization Administrator must have at least one of the following roles assigned in User Management: Account Administrator, Co-Administrator, or CONNECT Services Administrator. For more information about User Management please visit our Bentley Communities [Licensing, Cloud, and Web Services](https://communities.bentley.com/communities/other_communities/licensing_cloud_and_web_services/w/wiki/50711/user-management-2-0) wiki page. ### Rate limits All iTwin Platform API operations have a rate limit. For more documentation on that visit [Rate limits and quotas](https://developer.bentley.com/apis/overview/rate-limits/) page. ---
     *
     * @tags Users
     * @name GetImodelUsers
     * @summary Get iModel Users
     * @request GET:/{id}/users
     * @secure
     */
    getImodelUsers: (id: string, query?: { $top?: number; $skip?: number }, params: RequestParams = {}) =>
      this.request<UsersMinimal, ErrorResponse>({
        path: `/${id}/users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
