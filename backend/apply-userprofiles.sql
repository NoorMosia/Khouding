CREATE TABLE IF NOT EXISTS "UserProfiles" (
    "Id"          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
    "UserId"      text        NOT NULL REFERENCES "AspNetUsers"("Id") ON DELETE CASCADE,
    "DisplayName" text        NOT NULL,
    "UpdatedAt"   timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS "IX_UserProfiles_UserId"
    ON "UserProfiles" ("UserId");
